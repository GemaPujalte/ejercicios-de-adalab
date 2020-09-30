"use strict";

//EJERCICIO 1

document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

//EJERCICIO 2

const direction = "Augustóbriga 9";

const direction2 = "Villaverde Alto";

let name = "Gema";
name = "Ana";
name = "Sergio";

console.log(name);

//EJERCICIO 3

const textElement = document.querySelector(".text");

textElement.innerHTML = textElement.innerHTML + " mundo";

//EJERCICIO 4

const titleElement = document.querySelector(".title");
const ada1 = document.querySelector(".adalaber1");
const ada2 = document.querySelector(".adalaber2");

titleElement.innerHTML = titleElement.innerHTML + ada1.innerHTML;

//EJERCICIO 5

//EJERCICIO 6

const divElement = document.querySelector(".divContainer");

const content =
  '<h1>"Lorem Ipsum"</h1><img src="http://via.placeholder.com/350x150"><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit".</p>';

divElement.innerHTML = content;

//EJERCICIO 8

const button2 = document.querySelector(".button2");

button2.classList.add("buttonOf");
