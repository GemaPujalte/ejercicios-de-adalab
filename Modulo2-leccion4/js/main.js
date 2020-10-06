"use strict";

//EJERCICIO 1

function multiply(a, b) {
  const result = a * b;
  return result;
}

const resultMultiply = multiply(9, 2);
console.log(resultMultiply);

//EJERCICIO 2

function calculateMean(n1, n2, n3, n4) {
  const sumNumbers = (n1 + n2 + n3 + n4) / 4;
  return sumNumbers;
}

console.log(calculateMean(100, 100, 100, 100));
// console.log(resultMean);

//EJERCICIO 3

function calculatePrices(onlyPrice) {
  const ivaPrice = onlyPrice * 0.21;
  const total = onlyPrice + ivaPrice;

  const totalResult = `Precio sin IVA: ${onlyPrice}, IVA: ${ivaPrice} y Total: ${total}`;

  return totalResult;
}

const totalResultPrices = calculatePrices(20);
console.log(totalResultPrices);

//EJERCICIO 4

function isEven(number) {
  const isEven = number % 2 === ? true : false;

  return isEven;
}

const result = isEven(10);
console.log(result);

//EJERCICIO 5

function getEl(selector) {
  const selectElement = document.querySelector(selector);
  return selectElement;
}

const btnEl = getEl(".boton");
console.log(btnEl);
