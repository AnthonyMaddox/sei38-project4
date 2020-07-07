//start building some things on the page with js so you can feel having access to them


console.log("hello world");
let prompter = document.querySelector(".prompter");
prompter.innerHTML = "Am I Posionous?";
prompter.classList.add("green");
let cardDiv = document.querySelector(".cardDiv");
cardDiv.addEventListener('click', flipCard);
let input = document.querySelector("input");

let form = document.querySelector("form")

form.addEventListener("keydown", flipCard);
form.addEventListener("keyup", checkCard);

let newCard;
let cardArray;
function checkCard() {
   console.log('checkCard function')
}
function flipCard() {
   console.log('flipCard function')
}
function compareCards(){
   console.log('compareCards function')
}
