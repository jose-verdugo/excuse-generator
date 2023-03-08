/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function random(array1, array2, array3) {
    const randomWord1 = Math.floor(Math.random() * array1.length);
    const randomWord2 = Math.floor(Math.random() * array2.length);
    const randomWord3 = Math.floor(Math.random() * array3.length);
    let randomWord = `${array1[randomWord1]}  ${array2[randomWord2]} ${array3[randomWord3]}`;
    return randomWord;
  }

  const button = document.querySelector(".btn");
  button.addEventListener("click", () => {
    document.querySelector(".excuse").innerHTML = random(who, what, when);
  });
};

// https://github.com/jose-verdugo/excuse-generator.git
