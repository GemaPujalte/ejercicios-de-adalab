"use strict";

//EJERCICIO 2

const superWave = document.querySelector(".super-wave");
//const superWave guarda como valor el elemento span que es el que tiene la clase .super-wave y es el que queremos modificar.

superWave.classList.add("main-title2");
//añade al span (que estaba guardado en la constante superWave) la clase main-title2.

//EJERCICIO 3

const kiwis = 10;
const peras = 6;
const uvas = 2;
const total = kiwis + peras + uvas;

console.log(total + "€");

//EJERCICIO 4

const diners = 9;
const account = 128;
const plusAna = 2;

const pricePerson = account / diners;
console.log(pricePerson + "€");

const totalCountAna = pricePerson + plusAna;
console.log(totalCountAna + "€");

//EJERCICIO 5

const age = 39;
const hours = 24;
const days = 365;
const totalHours = 39 * 24 * 365;

console.log(totalHours);

//EJERCICIO 6

const name = "Irene";

// console.log("Hola " + name + ",encantada de conocerte");

const greeting = document.querySelector(".greeting"); //Guarda el contenido del elemento que tenga la clase greeting.
const spanElement = document.querySelector(".name"); //Guarda el contenido del elemento que tenga la clase span.

greeting.innerHTML =
  "Adios <div style = 'display:inline; color:red;'>" +
  name +
  "</div> , hasta mañana"; //Modifica el contenido de greeting en el html con todo lo que le pasamos y lo interpreta como si fuera exactamente html.

greeting.innerHTML = `Buenos dias ${name}, como estas?`; //Cuidado con las comillas, es el acento cinrcunflejo

//EJERCICIO 7 está arriba

//EJERCICIO 8

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const liElement = document.querySelector(".li1");
liElement.innerHTML = `<img src="${firstDogImage}" <p>${firstDogName}</p>`;

const liElement2 = document.querySelector(".li2");
liElement2.innerHTML = `<img src="${secondDogImage}" <p>${secondDogName}</p>`;

const liElement3 = document.querySelector(".li3");
liElement3.innerHTML = `<img src="${thirdDogImage}" <p>${thirdDogName}</p>`;

//EJERCICIO 9

const namePair = "Irene";

// const pElement = document.querySelector("body");
// pElement.innerHTML =
//   "<p>El nombre de mi compañera es <span style = 'display:inline'>Leticia Fernández Sánchez</span>, y está compuesto por <div style ='display:inline'>23</div> caracteres</p>";

document.write(
  `El nombre de mi compañera ${namePair} esta compuesto por ${namePair.length} caracteres`
);

//   "El nombre de mi compañera " +
//     namePair +
//     " esta compuesto por " +
//     namePair.length +
//     " caracteres"
// );
