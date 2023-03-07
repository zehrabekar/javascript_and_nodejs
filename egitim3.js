// for döngüsü
// for(ilk atama; döngü çalıştırma şartı; her çalışma sonrası ne olacağı)

 //ekrana 5 kere isim yazdırma
 console.log("zehra")
 console.log("zehra")
 console.log("zehra")
 console.log("zehra")
 console.log("zehra")
 //ekrana ismimizi çok daha fazla sayıda yazdırmamız gerektiğinde bu şekilde uğraşmamak, kod kalabalığı olmaması ve daha kolay düzenlenmebilmesi için for döngüsünü kullanacağız

 for(let i=0 ; i<6; i++)
 console.log("zehra") 
 // bu şekilde console kısmında başında 6 yazarak zehra yazdı
 /* burada i adında bir değişken oluşturduk ve 0 değerini verdik. daha sonra i'nin 6dan küçük olana dek çalışmasını 6 ve 6dan büyük olduğunda 
 çalışmayı durdurmasını istedik. 3. kısımda ise i değişkeninin her seferinde 1 artarak devam etmesini istedik
 ayrıca for döngüsünden sonra ekranda görünmesini istediğimiz ifade 1 satırsa süslü parantez içine almadan bu şekilde yazabiliriz ama döngüye bağlı çalışacak birden fazla ifade
 yazdırmamız gereken durumlarda çıktıları aynı süslü parantez içine almamız gerekir */

 for(let i=0, j=0; (i+j) < 20 ; i=i+5, j=j+2) {
    console.log("döngü çalıştı") 
    console.log("i değeri:" +i+ " j değeri:" + j)
 }
/* burada for döngüsü parantezi ile süslü parantez arasına ; koyarsak döngü ve çıktı birbirinden bağımsız olur 
ve çıktılar döngü şartına göre ekrana yazılmaz direkt bir kez yazılır. 
yanlış ifade : 
--------------------------
 for(let i=0, j=0; (i+j) < 20 ; i=i+5, j=j+2) ; {
    console.log("döngü çalıştı") 
    console.log("i değeri:" +i+ " j değeri:" + j)
 }
--------------------------

 /*
sonsuz döngü :
for (; ;) {

}
*/ 

// tekrar sayısı belli olan durumlarda for döngüsü kullanırız
// i değişkenini birden fazla kez tanımlayabiliyoruz çünkü tanımlanan i değişkeni o for döngüsü içindir. Döngü içinde tanımlanan değişken döngü dışında kullanılamaz.

/* döngü dışında tanımlanan değşken döngü içinde kullanılabilir
let j = 2;
 for(j=0 ; j<6; j++)
 console.log("zehra") */

//while döngüsü
let say = 5
while (say < 15) {
   console.log(" while döngüsü çalıştı")
   say++
}
/* say++ yazmazsak sonsuza kadar çalışıyor
şart doğruysa çalışır*/

//do-while döngüsü
let yasimm =22
do {
   console.log("do-while döngüsü")
} while(yasimm > 30);
/*do-while döngüsünü noktalı virgülle bitirmek zorundayız
do-while döngüsündeki şart sağlanmasa bile döngü bir kez çalıştırılır. mesela burada yasimm değişkeni 30dan büyük olmadığı halde ekrana bir kez  "do-while döngüsü" yazdırıldı*/
let yasiimm =22
do {
   console.log("do-while döngüsü")
   yasiimm++
} while(yasiimm < 30);

/* tekrar eden kodun kaç kere çalışacağını biliyorsak for döngüsünü,
döngüdeki şart sağlandığı sürece kodun çalışması için while döngüsünü,
bir kod önce çalışsın sonra şartı kontrol edilsin istiyorsak do-while döngüsünü kullanacağız. */

//break
for(let i=0; i<20 ; i++) {
   if (i==12) {
      break;
   }
   console.log("break kullanımı")
}
/* break komutu döngünün çalışmasını durdurur. buraad i değişkeninin 20den küçük olduğu durumlarda çalışması fakat i değişkeni 12ye eşit olduğunda döngünün durması istenmiş.
değişken 1 artarak 12 olduğunda döngü çalışmaı bırakmıs ve ekrana 12 kez break kullanımı yazdırılmıştır*/

//continue 
for(let i=10; i<30 ; i++) {
   if (i==15) {
      continue 
   }
   console.log(" continue kullanımı"+ i)
}
console.clear();
/* çıktı olarak 10dan 29 a kadar continue kullanımı + i değerini yazdı fakat continue kullanımı15 yazmadı
bunun sebebi i 15e eşit olduğunda altta kalan çıktıların bir anlamı olmuyor ve döngü 15den sonra yeniden çalışmaya başlıyor ilk çıktı continue kullanımı16 oluyor
*/

//return
/*for içinde return kullanımı sadece fonksiyon içindeyse olur, yoksa illegal return statement hatası alınır*/
/*for (let i=0; i<10; i++) {
   if (i==5) { 
      return
   }
 console.log("return kullanımı"+ i)} // üsteki hatayı verdi*/

// bölüm sonu oyunlu soru
/*
Math.random() ile rastgele sayı üretilir. Bu fonksiyon 0 dahil, 1 hariç bir değer üretir (0-0.9). Üretilen değeri istediğimiz
aralığın üst sınırıyla çarparsanız verilen aralıkta değer üretmiş oluruz.
örnek:
0 ile 10 arasında bir sayı için :
(Math.random() * 10)+1 bize 1 ile 10 arasındaki 10 da dahil sayı üretmiş olur.
üretilen bu sayı ondalıklı olabilir, bunu tam sayıya dönüştürmek için Math.floor() kullanabiliriz.

Tasarlayacağımız piyango oyunu bilgileri:
Sistem iki basamaklı bir sayı üretmeli, kullanıcıdan da sayı girişi istenerek bu sayının tahmin edilmesi istenmeli.
Eğer kullanıcı sayıyı tam olarak doğru bilirse 10.000 tl,
Eğer kullanıcı sayının basamaklarını bilirse (yani 65 yerine 56 yazmışsa) 5000 tl,
Eğer kullanıcı sayının sadece bir basamağını bilirse 1000 tl kazanır.
 */

let sistemSayisi = (Math.random() * 90) + 10; // bizden iki basamaklı bir sayı isteniyor, min 0 üretirse en az 10 elde etmek için +10 yaptık. 99 elde etmek için de *90 yaptık.
console.log("üretilen ondalıklı sayı :" + sistemSayisi)
sistemSayisi = Math.floor(sistemSayisi); // bu satırda ondalıklı sayıyı tam sayıya çevirdik 

let kullanicininSayisi = parseInt(prompt("iki basamaklı bir sayı giriniz","10"))// promptan gelen sayı string olarak geliyor parseInnt ile int türüne çeviriyoruz

let sistemSayisininbirlerbasamagi = sistemSayisi % 10
let sistemSayisininonlarbasamagi = Math.floor(sistemSayisi /10)

console.log(`sistem sayısının birler basamağı ${sistemSayisininbirlerbasamagi} , onlar basamağı ${sistemSayisininonlarbasamagi}`)

let userSayisibirlerbasamagi = kullanicininSayisi % 10
let userSayisionlarbasamagi = Math.floor(kullanicininSayisi/10)

console.log(`kullanıcı sayısının birler basamağı ${userSayisibirlerbasamagi} , onlar basamağı ${userSayisionlarbasamagi}`)


console.log(`Sistemin ürettiği sayı ${sistemSayisi} , kullacının girdiği sayı ${kullanicininSayisi}`);

if(sistemSayisi === kullanicininSayisi) {
   console.log("Tebrikler 10.000 tl kazandınız. Tahmininiz :" + kullanicininSayisi+"sistem sayısı :"+sistemSayisi)
}else if (sistemSayisininbirlerbasamagi===userSayisionlarbasamagi && sistemSayisininonlarbasamagi === userSayisibirlerbasamagi) { 
console.log("Tebrikler 5000 tl kazandınız. Tahmininiz :" + kullanicininSayisi+"sistem sayısı :"+sistemSayisi)}
else if (sistemSayisininbirlerbasamagi === userSayisibirlerbasamagi || sistemSayisininonlarbasamagi === userSayisionlarbasamagi) {
   console.log("Tebrikler 1000 tl kazandınız. Tahmininiz :" + kullanicininSayisi+"sistem sayısı :"+sistemSayisi)
}else if (sistemSayisininbirlerbasamagi===userSayisionlarbasamagi || sistemSayisininonlarbasamagi === userSayisibirlerbasamagi){
   console.log("Tebrikler 500 tl kazandınız. Tahmininiz :" + kullanicininSayisi+"sistem sayısı :"+sistemSayisi)// bu şartı ben ekledim
}else {
   console.log("maalesef bir şey kazanamadınız.Tahmininiz :" + kullanicininSayisi +" sistem sayısı :"+sistemSayisi)
}












