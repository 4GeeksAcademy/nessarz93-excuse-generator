/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = who[Math.floor(Math.random() * 4)];
  let accion = action[Math.floor(Math.random() * 4)];
  let que = what[Math.floor(Math.random() * 4)];
  let donde = when[Math.floor(Math.random() * 4)];

  let result = quien + " " + accion + " " + que + " " + donde;

  let excuseElement = document.getElementById("result");
  excuseElement.textContent = result;

  console.log(result);
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

