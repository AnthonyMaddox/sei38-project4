//start building some things on the page with js so you can feel having access to them...
//pics from https://www.webmd.com/skin-problems-and-treatments/ss/slideshow-poison-plants-guide

//this is to unstick focus from reset button after click so hitting space bar wont keep resetting the game
document.addEventListener("click", function () {
  if (document.activeElement.toString() == "[object HTMLButtonElement]") {
    document.activeElement.blur();
  }
});

document.addEventListener("keypress", function (e) {
  e.preventDefault();
  if (e.code === "Space") {
    if (topCard.classList.contains("hideCard")) {
      resetGame()
      displayTopCard();
    } else {
      flipCard();
    }
  }
});
let cardArray = [];
let activeCard = {};
let input = document.querySelector("input");
let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetGame);
let topCard = document.querySelector(".topCard");
let bottomCard = document.querySelector(".bottomCard");
bottomCard.classList.add("hideCard");
let prompter = document.querySelector(".prompter");
prompter.innerHTML = "Press Spacebar";
prompter.classList.add("green");

//Deck

class Flashcard {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}

const ivy = new Flashcard("Poison Ivy", "imgs/ivy.jpg");
const oak = new Flashcard("Poison Oak", "imgs/oak.jpg");
const sumac = new Flashcard("Poison Sumac", "imgs/sumac.jpg");
const foxglove = new Flashcard("Foxgolve", "imgs/foxglove.jpg");
const jimsonweed = new Flashcard("Jimsonweed", "imgs/jimsonweed.jpg");
const hemlock = new Flashcard("Hemlock", "imgs/hemlock.jpg");
const oleander = new Flashcard("Oleander", "imgs/oleander.jpg");
const parnsnip = new Flashcard("Parnsnip", "imgs/parnsnip.jpg");
const nettle = new Flashcard("Stinging Nettle", "imgs/nettle.jpg");
const nightshade = new Flashcard("Nightshade", "imgs/nightshade.jpg");
const azalea = new Flashcard("Azalea", "imgs/azalea.jpg");
const mistletoe = new Flashcard("Mistletoe", "imgs/mistletoe.jpg");
const hogweed = new Flashcard("Hogweed", "imgs/hogweed.jpg");
const trumpet = new Flashcard("Trumpet Flower", "imgs/trumpet.jpg");

//Fisher-Yates Shuffle found@ https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffle(cards) {
  let newPosition;
  let tempPos;
  for (let i = cards.length - 1; i > 0; i--) {
    newPosition = Math.floor(Math.random() * (i + 1));
    tempPos = cards[i];
    cards[i] = cards[newPosition];
    cards[newPosition] = tempPos;
  }
  return cards;
}

//functions

function displayTopCard() {
  topCard.classList.remove("hideCard");
  bottomCard.classList.add("hideCard");
  cardArray.push(activeCard);
  console.log(cardArray);
  shuffle(cardArray);
  activeCard = cardArray.shift();
  console.log(activeCard);
  topCard.style.backgroundImage = `url(${activeCard.img})`;
  bottomCard.innerHTML = `${activeCard.name}`;
}

function removeCard() {
  cardArray.push(activeCard);
  console.log(cardArray);
  shuffle(cardArray);
  activeCard = cardArray.shift();
  console.log(activeCard);
  topCard.style.backgroundImage = `url(${activeCard.img})`;
  bottomCard.innerHTML = `${activeCard.name}`;
}

function flipCard() {
  console.log("flip");
  bottomCard.classList.remove("hideCard");
  topCard.classList.add("hideCard");
}

function compareCards() {
  console.log("compareCards function");
}

function resetGame() {
  cardArray = [];
  cardArray.push(
    ivy,
    oak,
    sumac,
    foxglove,
    jimsonweed,
    hemlock,
    oleander,
    parnsnip,
    nettle,
    nightshade,
    azalea,
    mistletoe,
    hogweed,
    trumpet
  );
  console.log(cardArray);
  cardArray = shuffle(cardArray);
  activeCard = cardArray.shift();
  console.log(activeCard);
  topCard.style.backgroundImage = `url(${activeCard.img})`;
  bottomCard.innerHTML = `${activeCard.name}`;
  bottomCard.classList.add("hideCard");
  topCard.classList.remove("hideCard");
  prompter.innerText = "Be Careful...";
}

//click on picture in game board
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

//let input = document.querySelector('input')
//form.addEventListener("keyup", checkCard);
//form.addEventListener("submit", flipCard);
