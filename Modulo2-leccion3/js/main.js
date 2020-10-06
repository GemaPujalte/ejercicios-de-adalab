"use strict";

//EJERCICIO 1
const DEFAULT_AVATAR = "http://placehold.it/300x300";

let userAvatar = "http://www.fillmurray.com/300/300";

const imgAvatar = document.querySelector(".user__avatar"); //guardo en la variable el elemento img porque es el que quiero modificar.

imgAvatar.setAttribute("src", `${userAvatar}`); //añado al elemento img el atributo src y una imagen concatenandola.

let downloadImage = DEFAULT_AVATAR || userAvatar; //guardo en una variable el resultado true de la comparacion. True será la primera opcion porque es la primera que aparece como que sí está. "Esta o esta".

if (userAvatar) {
  downloadImage = userAvatar;
} else {
  downloadImage = DEFAULT_AVATAR;
}

imgAvatar.setAttribute("src", downloadImage); // al elemento img con el atributo añadido src, le paso tambien por parámetro la variable donde se guarda la respuesta a la comparación.

//EJERCICIO 2

const name = "Ana";

if (name === "Irene" || name === "Gema") {
  console.log(`Bienvenida ${name}`);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado"
  );
}

//EJERCICIO 3

let number = 11;

if (number === 0) {
  console.log("El número es 0");
} else if (number < 0) {
  console.log("El número es negativo");
} else if (number + 2 > 13 && number + 2 <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (number > 20 && number < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}

//EJERCICIO 4

let conversor = 3;

let firstYear = 15;
let secondYear = 9;
let thirdYear = 5;

if (conversor === 1) {
  console.log(`Tu perro tiene ${firstYear} años humanos`);
} else if (conversor === 2) {
  console.log(`Tu perro tiene ${secondYear} años humanos`);
} else if (conversor >= 3) {
  console.log(`Tu perro tiene ${thirdYear * conversor} años humanos`);
}

//EJERCICIO 5

// const changeDiv = document.querySelector(".div");

// if (changeDiv.classList.contains("succes")) {
//   console.log(changeDiv.innerHTML = <h1>AVISO</h1>
//     <p>Tenga cuidado</p>);
// }
