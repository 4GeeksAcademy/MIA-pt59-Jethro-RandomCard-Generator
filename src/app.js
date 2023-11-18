/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  //document.querySelector(".bckg").style.color = "green";
  document.querySelector(".number").innerHTML = choices();
  document.querySelector(".top").innerHTML = sameSymbol;
  document.querySelector(".bottom").innerHTML = sameSymbol;

  //let color = sameSymbol.style.color;
  if (sameSymbol === "♦" || sameSymbol === "♥") {
    //sameSymbol.style.color = "red";
    document.querySelector(".card").style.color = "red";
  }
};

function choices() {
  let ArrNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let numbersIndex = Math.floor(Math.random() * ArrNumbers.length);
  return ArrNumbers[numbersIndex];
}

function symbol() {
  let ArrSymbol = ["♦", "♥", "♠", "♣"];
  let symbolsIndex = Math.floor(Math.random() * ArrSymbol.length);
  return ArrSymbol[symbolsIndex];
}

let sameSymbol = symbol();

function changeFontColor() {
  return sameSymbol;
}
