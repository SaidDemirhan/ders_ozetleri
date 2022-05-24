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
