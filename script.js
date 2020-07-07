//start building some things on the page with js so you can feel having access to them
//pics from https://www.webmd.com/skin-problems-and-treatments/ss/slideshow-poison-plants-guide
//let cardDiv = document.querySelector(".cardDiv");
let newCard;
let cardArray;
console.log("hello world");
let prompter = document.querySelector(".prompter");
prompter.innerHTML = "Please Reset the Game";
prompter.classList.add("green");

let cardDiv = document.querySelector(".cardDiv");
cardDiv.addEventListener("click", function (e) {
  e.preventDefault();
  if (bottomCard.classList.contains("hideCard")) {
    bottomCard.classList.remove("hideCard");
    topCard.classList.add("hideCard");
  } else {
    topCard.classList.remove("hideCard");
    bottomCard.classList.add("hideCard");
  }
});

let topCard = document.querySelector(".topCard");
let bottomCard = document.querySelector(".bottomCard");
bottomCard.classList.add("hideCard");

function checkCard() {
  console.log("checkCard function");
}
function flipCard() {
  if (bottomCard.classList.contains("hideCard")) {
    bottomCard.classList.remove("hideCard");
    topCard.classList.add("hideCard");
  }
}
function compareCards() {
  console.log("compareCards function");
}
//let form = document.querySelector('form')
//form.addEventListener("keyup", checkCard);
//form.addEventListener("submit", flipCard);
