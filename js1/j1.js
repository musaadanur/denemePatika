
/* ********************************* */
let str = "moses";
console.log(typeof str, str); // typeof seğisken tipini verir

let int = 20;
console.log(typeof int, int);

let bool = false;
console.log(typeof bool, bool);

let bigint = BigInt('345634633756465634525423523');
//yada biginti tanımlarken sayı sonuna n ekle
let bigint2 = 34563463375646566161613n;
console.log(typeof bigint2, bigint2);

let symbol = Symbol("moses"); // deistirilemez
console.log(typeof symbol, symbol);

let y = null;
console.log(typeof y, y);

let obj = {
    name: 'moses',
    age: 30,
    admin: true,
};
console.log(typeof obj, obj);

let name = "moses";
let cloneName = name;
cloneName = "doe";
console.log('immutable', name, cloneName);

let user ={ // bu kısımı sor
    name: "moseses",
};
let cloneUser = user;
cloneUser.name= "ts"; // userdaki name de ts oldu FUCK
console.log('mutable', user, cloneUser)

/* ********************************* */
// degiskenler

var xx; // var ve let ile degisken olustururken ilk degeri
let yy; // atamasakta hata almayız
const zz = 61; // bunu deger atamadan olusturamayız

/******** */
// Scope
{ //suslu parantez içi bir block scope oluyo
    const zz = 25; // yukardaki yy ile alakasız sadece suslu
            // içinde geçerli bir değisken
    console.log(zz)
}
// global scope
{
    var globalX = 14; // suslu dısındaki bloklarda da
                        // kullanabiliriz bu degiskeni
} console.log(globalX);

// function scope
function example(){ // içindeki degerler sadece func
    var x= 1;       // içinde geçerli
    let y= 2;
    const z= 3;
    console.log(x,y,z)
} example(); 


/////////////////

console.log(5 == "5"); // true (string "5" sayıya dönüştürülür)
console.log(null == undefined); // true (özel durum)

console.log(5 === "5"); // false (farklı türler: sayı ve string)
console.log(null === undefined); // false (farklı türler)
console.log(0 === false); 

///////////////////

let xxx=10;
let yyy=3;
let zzz;
z= xxx ** yyy; // 10*10*10 demek
console.log(z);

//// fonksiyon
// 2 parametrenin carpimini return
// eden(veya dönen/döndüren) bir fonksiyon
function multiply(a, b) { // "a" and "b" are parameters
    return a * b; // Multiplies the inputs and returns the result
  }
  
  console.log(multiply(3, 2)); // Output: 6

  // default parameters
  function greet(name = "Misafir") {
    return `Merhaba, ${name}!`;
  }
  console.log(greet()); // Çıktı: Merhaba, Misafir!
  console.log(greet("Dave")); // Çıktı: Merhaba, Dave!
  
  function example(a, b, c = 5) { // c parametresi asla a veya b'den once yazilmamalidir!
    return a + b + c;
  }
  const result = example(1, 2);
  console.log(result); // 1 + 2 + 5
  ///
  

