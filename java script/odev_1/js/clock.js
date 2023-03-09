let a = prompt("Selamlar! İsminizi öğrenebilir miyiz?");
document.querySelector("#myName").innerHTML= a;
let d = new Date ();
let b = d.toLocaleTimeString();
let g = d.toLocaleDateString();

document.querySelector("#myClock").innerHTML = b ;
document.querySelector("#gun").innerHTML = g ;