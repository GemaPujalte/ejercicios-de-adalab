// "use strict";
// //recogemos el elemento sobre el que queremos escuchar el evento.
// const button = document.querySelector(".button");

// //definimos la funcion manejadora (handler)
// function changeText() {
//   const textElement = document.querySelector(".text");
//   textElement.innerHTML = "Mi primer click,¡ole yo y la mujer que me parió!";
// }
// //console.log(changeText());

// //Registramos la funcion escuchadora (listener) sobre el elemento que queremos que ejecute la funcion manejadora.
// // button.addEventListener("click", changeText);

// //EJERCICIO 2

// const input = document.querySelector(".button-hello");

// function sayHello() {
//   let inputElement = document.querySelector(".input").value;
//   console.log(`Hola ${inputElement}`);
// }

// // input.addEventListener("click", sayHello);

// //EJERCICIO 3

// const paragraph = document.querySelector(".paragraph");

// function addParagraph() {
//   const paragraphElement = document.querySelector("body");
//   paragraphElement.innerHTML = paragraph.innerHTML + "<p>Lorem ipsum</p>";
// }

// paragraph.addEventListener("mouseover", addParagraph);

//EJERCICIO 4

//EJERCICIO 5

const documentColor = document.querySelector("body");

function changeColors(event) {
  if (event.key === "r") {
    documentColor.classList.add("red");
  } else if (event.key === "m") {
    documentColor.classList.add("purple");
  }
}

document.addEventListener("keydown", changeColors);
