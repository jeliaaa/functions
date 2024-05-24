// const arr = ["apple", "banana", "cocoa", "arr"];
// arr.sort((a, b) => a - b); //  funqciis gadawodeba (a,b) => a-b  ||| (a,b) => b-a - alagebs klebadobit
// arr.sort(); - alagebs logikurad (zrdadobit an anbnait)

// arr.reverse(); - abrunebs sapirispiro mimartulebit
// arr.filter();

// var newArr = arr.concat([0, 3, 5]); // arrayebis sherwyma | axali array

// console.log(arr.length); - arrays sigrdze, elementebis raodenoba
// console.log(arr[arr.length - 1]); - arrays bolo elementi tu ar vicit indeqsi
// anu bolo indeqsi ertit naklebia sigrdzeze

// arr.splice(0, 2);
// a - sawyisi index(ricxvi)  || b - ramdeni unda waishalos
// tu parametrad gaayolebt mxolod ert ricxvs, waishleba am indexiani elementis shemdeg yvelaferi
// arr.push("aaa", "ada", "ada"); // amatebs elements boloshi
// arr.pop(); // agdebs bolo elements

// arr.unshift('dasawyis', 'asd');
// arr.shift();
// console.log(arr);

// arr.forEach();
// arr.map();

function misalmeba() {
  console.log("gamarjoba");
  console.log("me var aleqsandre");
}

function saxeliReturnisGareshe(name, surname) {
  console.log(name + " " + surname);
}

function saxeli(name, surname) {
  return name + " " + surname;
}

// saxeli("giorgi", "giorgadze");
// saxeli("Aleksandre", "jelia");
// saxeli("aslani", "abashidze");

saxeliReturnisGareshe();
saxeli();

console.log(saxeliReturnisGareshe() + 1);
console.log(saxeli("a", "b") + " teqsti");

// function arraysDalageba(array) {
//   array.splice(0, 1);
//   array.pop();
//   array.sort((a, b) => a - b);
// }

// var array = [0, 145, 20, 9, 4, 5, 6];
// var array2 = [0, 145902342, 2220, 9, 4, 5, 6];
// var array3 = [0, 145, 224140, 9231, 32144, 5, 6];

// arraysDalageba(array);
// arraysDalageba(array2);
// arraysDalageba(array3);

// console.log(array);
// console.log(array2);
// console.log(array3);

// function arraysDalageba(array) {
//   array.splice(0, 1);
//   array.pop();
//   array.sort((a, b) => a - b);
//   return array;
//   console.log("aa"); // unreachable
// }

// console.log(arraysDalageba([1, 21, 4325, 332, 5325252]));

// var tavdapirveli = [0, 1, 2, 4, 5, 6];

// function dalagebaInformaciis(posts) {
//   posts.shift();
//   posts.pop();
//   posts.splice(5);
//   return posts;
// }
// var arrayOfObjects = [
//   { name: "giorgi", manqana: "Toyota" },
//   { name: "zaza", manqana: "Mercedes" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
//   { name: "dato", manqana: "Honda" },
// ];

// var dalagebuliPostebi = dalagebaInformaciis(arrayOfObjects);
// console.log(dalagebuliPostebi);

// function giorgi(priveliRicxvi, meoreRicxvi) {
//   let jami = priveliRicxvi + meoreRicxvi;
//   return jami;
// }

// var didiRicxvebisJami = giorgi(1034567, 1234521);
// console.log(didiRicxvebisJami);
