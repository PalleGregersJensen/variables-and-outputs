"use strict";

let number = 0

window.addEventListener("load", initApp);

function initApp() {
    console.log("initApp - app is running");
    document.querySelector("btn-increment").addEventListener("click", incrementNumber);
}

function incrementNumber() { 
    console.log("Plus-knap");
    console.log(number);
    number = number + 1;
    displayNumber();
}


function displayNumber() {
    console.log("displayNumber");
    document.querySelector("#number"), textContent = number;
}

function initApp() {
  console.log("initApp - app is running");
  document.querySelector("btn-decrement").addEventListener("click", decrementNumber);
}

function decrementNumber() {
  console.log("Plus-knap");
  console.log(number);
  number = number - 1;
  console.log(number);
  displayNumber();
}

function displayNumber() {
  console.log("displayNumber");
    document.querySelector("#number"),textContent = number;
    let message = 'The number is: $(number)';
    console.log(message);
    document.querySelector("#messgage"),textContent = message;
}

let num = 7;
console.log(num);

if (num > 5) {
  console.log("Tallet er større eller lig end 5");
}

let fullName = "Hanne"

if (fullName == "Hanne") {
console.log("ja, det er Hanne")
}


let num = 2

if (num>)
