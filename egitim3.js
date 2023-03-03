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
 for(let i=0, j=0; (i+j) < 20 ; i=i+5, j=j+2) ; {
    console.log("döngü çalıştı") 
    console.log("i değeri:" +i+ " j değeri:" + j)
 }

 /*
sonsuz döngü :
for (; ;) {

}
*/ 
// tekrar sayısı belli olan durumlarda for döngüsü kullanırız
// i değişkenini birden fazla kez tanımlayabiliyoruz çünkü tanımlanan i değişkeni o for döngüsü içindir


