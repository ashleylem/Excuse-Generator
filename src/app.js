/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateexcuse() {
  // getting random array element from who
  //math.random chooses a random number from 0 to .99
  // *array.length ensures that it only picks from 0 up to the length of the array
  // [...] everything in brackets is the random index and we access the array at that index
  var whoexcuse = who[Math.floor(Math.random() * who.length)];
  var actionexcuse = action[Math.floor(Math.random() * action.length)];
  var whatexcuse = what[Math.floor(Math.random() * what.length)];
  var whenexcuse = when[Math.floor(Math.random() * when.length)];
  return whoexcuse + " " + actionexcuse + " " + whatexcuse + " " + whenexcuse;
}
console.log(generateexcuse());

document.getElementById("excuse").innerHTML = generateexcuse();
