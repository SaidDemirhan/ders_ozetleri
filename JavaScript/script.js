//Bu yazilari html sayfasindan incele diyerek Console bölümünde görebiliriz.
//Bilgi: ctrl k+ctrl c isaretli satirlari yorum satirina dönüstürür.

//alert("Hos Geldiniz");
console.log("Herzlich Willkommen");
//sayfa girisi bilgilendirme uyarisi

console.log(123);
console.error("hata");
console.warn("ACHTUNG");
//sayfanin incele kismindaki konsol kismindan bu ayrintilar görünür

//console.clear
//konsoldaki yazlari temizler

//////////////////////////////////////////////////////////////////
//Degiskenler

var adSoyad = "Said Demirhan";

console.log(adSoyad);

yas = 25;
console.log(yas);

//degisken isimleri rakamla baslayamaz. - 1yas
//yasak kelimeleri degisken isimlerinde kullanamyiz var if="kk"
//degisken adinda bosluk birakilamaz - adSoyad
//var her zaman degistirilebilir
//Turkce karakterler kullanma

const eMail = "saiddemirhan@gmail.com";
console.log(eMail);
//const hicbir zaman degistirilemez.

//////////////////////////////////////////////////////////////////
//Degisken türleri
//Primitive

let isim = "Said";
console.log(typeof isim); //string
//typeof bize veri tipini söylüyor

let age = 35;
console.log(typeof age); //number

let iyiMisin = false;
console.log(typeof iyiMisin); //boolean

let telefon;
console.log(typeof telefon); //undefined

//Array olarak bakarsak

let liste = ["Ali", "Ayse", "Ahmet"];
console.log(typeof liste); //object

//Object Literals olarak alinirsa
let adres = {
  sehir: "Balikesir",
  ulke: "Turkiye",
};
console.log(typeof adres); //object

//function olarak
var hesapla = function () {
  return 0;
};
console.log(typeof hesapla); //object

////////////////////////////////////////////////////////////

//OPERATORLER
let veri;
const a = 20;
const b = 10;
const c = 5;
let d = 3;

//Aritmetik Operatorler
veri = a + b;
veri = a - b;
veri = a / b;
veri = a * b;
//veri = a++;
//Hata verir cünkü bir sabit olarak atadik.
veri = d++;
//d nin önceki degerini yazdirir, yazdirdiktan sonra +1 arttirir.
veri = ++d;
//d nin son degerini +1 artirir sonrasinda yazdirir.
veri = d--;
veri = --d;
veri = a % b;
//mod unu alir ve bölümünden kalani verir
console.log(veri);

//Atama operatörleri
veri = a;
veri += a; //veri=veri+a
veri -= a;
veri *= a;
veri /= a;
veri %= a;
//verinin son degerinin a ya bölümünden kalani verir.
//bir sayinin tek mi yoksa cift mi oldugunu bilebilmek icin kullanilir.
console.log(veri);

//Karsilastirma operatörleri

//sonuclar her zaman boolean bir deger alacaktir.
veri = a == b; //false
veri = 5 == "5"; //true
//degerler ayni ise veri türü problem olmaz
veri = 5 === "5"; //false
//degerler ayni olsa bile türler farkli oldugu icin yanlistir.
veri = 5 === 5;
veri = a != b; //true
//a b ye esit olmadigi icin ifade dogrudur. Tip ve deger önemli!!!
veri = a !== b; //true
//a ve b esit degildir. ifade dogru- tipe bakmaz degere bakar
const x = "20";
//a ve x ayni degere sahip ama biri string biri number
veri = a != x; //false
veri = a !== x; //true
//ayni data type a sahip olmasina ragmen ifade dorudur.

veri = a > b;
veri = a < b;
veri = 5 >= 5;
veri = b <= c;
console.log(veri);

//Mantiksal Operatörler

//&&(And)

veri = a > b && a > c;
//iki sartin da dogru olmasi durumunda true verir.
//yanlis olmasi icin bir tanesinin dogru olamamasi yeterlidir.
//Hatasiz kul aramaktadir.

//||(OR)
veri = b > a || a > c;
//icinden sadece 1 tanesi de dogru olsa true olacaktir.
//gel, gel bir tane dogrun olsa bile gel

// !(NOT)
veri = !(a > b);
//a degeri b degerinden büyük DEGILDIR manasina gelir
console.log(veri);

//////////////////////////////////////////////////////////

//NUMBERS

//let = veri;   //yukarida oldugu icin yoruma aldik.
veri = Number("5");
veri = parseInt("5");
//verinin basina Number veya parsInt yazarak o string verisini
//Integer degeri haline cevirebiliriz
veri = parseFloat("5.5"); //ondalikli sayilari int cevirir.
veri = parseInt("54c5"); //ilk karsilastigi harfe kadar olan kismi Int olarak alir
veri = parseInt("c8"); //NaN degerini alir (Not a Number)
veri = isNaN("c8"); //boolean olarak true verir
//cünkü bu degerin tamami sayi degil
veri = isNaN("546"); //false verir cünkü bu bir sayidir.

console.log(veri);
console.log(typeof veri);

var sayi = 15.65895245;
veri = sayi.toPrecision(4); //15.66
//tam sayi ve virgulden sonrasindaki toplam rakam miktarini belirtir.

veri = sayi.toFixed(3); //15.659
//virgülden sonra kac adet rakam yazilacagini ifade eder.

veri = Math.PI; //Pi saysisini verir

veri = Math.round(4.5); //5 girileni yuvarlar

veri = Math.ceil(3.2); //4 hep yukariya yuvarlar

veri = Math.floor(8.9); //8 hep asagiya yuvarlar

veri = Math.pow(3, 2); //9 üssünü alir, 3'ün 2. kuvveti

veri = Math.sqrt(81); //9 karekökünü alir

veri = Math.abs(-50); //50 Mutlak degerini verir yani her zaman eksi isaretini + yapar

veri = Math.min(6, 1, 3, 5, 2); //1 minimum degeri verir

veri = Math.max(3, 2, 4, 1); //4 max degeri verir

veri = Math.floor(Math.random() * 10 + 1); // 0 ile 10 arasinda rastgele bir sayi
//+1 lik kismi 0 in dahil olmadigi anlamina gelir.

console.log(veri);
console.log(typeof veri);

///////////////////////////////////////////////////////////

//STRINGS

const ad = "Said";
const soyad = "Demirhan";
const yas1 = 36;

//let = veri;   //yukarida oldugu icin yoruma aldik.

//String birlestirme(String Concetenation)

veri = ad + " " + soyad; //Said Demirhan ya da
veri = ad;
veri += " " + soyad; //Said Demirhan

veri =
  "Benim adim " +
  ad +
  ", soyadim " +
  soyad +
  ", yasim " +
  yas1 +
  " ve Balikesir'de yasiyorum.";

//NOT= eger tirnak isaretinin yanlis algilanmasini istemiyorsak
//ters slash isareti kullanalim ('Balikesir\'de yasiyorum.')

//veya concat methoduyla birlestirilebilir.

veri = ad.concat(" ", soyad, " ", yas1); //Said Demirhan 36

veri = veri.toUpperCase(); //SAID DEMIRHAN 36

veri = veri.toLowerCase(); //said demirhan 36

veri = veri.substring(2, 6); //id d
//0 dan baslar... ilk i dahil, ikincisi dahil degil

veri = "said demirhan 36";
veri = veri.slice(1, 8); //aid dem

console.log(veri);
console.log(typeof veri);
