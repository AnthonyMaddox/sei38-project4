//start building some things on the page with js so you can feel having access to them...
//pics from https://www.webmd.com/skin-problems-and-treatments/ss/slideshow-poison-plants-guide

let cardArray = [];
let successArray = [];
let activeCard = {};
let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetGame);
let topCard = document.querySelector(".topCard");
let bottomCard = document.querySelector(".bottomCard");
bottomCard.classList.add("hideCard");
let prompter = document.querySelector(".prompter");
prompter.innerHTML = "Enter the Forest...";
prompter.classList.add("green");
let form = document.querySelector("form");
form.addEventListener("submit", compareCards);
let score = document.querySelector(".score");

bottomCard.innerHTML =
  "Enter your guess before you flip the card over or, you'll never leave.";
bottomCard.classList.add("instructions");

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
const foxglove = new Flashcard("Foxglove", "imgs/foxglove.jpg");
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
const gameOverCard = new Flashcard("Game Over", "deckTop.jpg");

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

function resetGame() {
  cardArray = [];
  successArray = [];
  topCard.classList.remove("gameOver");
  topCard.innerHTML = "";
  score.innerHTML = 0;
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
  bottomCard.classList.remove("instructions");
  form.classList.remove("hideCard");
}

function displayTopCard() {
  console.log(cardArray);
  console.log(activeCard);
  input.value = "";
  form.classList.toggle("hideCard");
  prompter.classList.remove("red");
  prompter.classList.add("green");
  topCard.classList.remove("hideCard");
  bottomCard.classList.add("hideCard");
  if (cardArray.length == 0) {
    resetGame();
  } else {
    if (prompter.innerHTML == "Safe!") {
      shuffle(cardArray);
      activeCard = cardArray.shift();
      topCard.style.backgroundImage = `url(${activeCard.img})`;
      bottomCard.innerHTML = `${activeCard.name}`;
    } else {
      prompter.innerText = "Be Careful...";
      cardArray.push(activeCard);
      shuffle(cardArray);
      activeCard = cardArray.shift();
      topCard.style.backgroundImage = `url(${activeCard.img})`;
      bottomCard.innerHTML = activeCard.name;
    }
  }
}
/*(prompter.innerHTML = "Safe!")
    prompter.classList.remove("red");
    prompter.classList.add("green");
    topCard.classList.remove("hideCard");
    bottomCard.classList.add("hideCard");
    shuffle(cardArray);
    activeCard = cardArray.shift();
    topCard.style.backgroundImage = `url(${activeCard.img})`;
    bottomCard.innerHTML = `${activeCard.name}`;
    */

function flipCard() {
  form.classList.toggle("hideCard");
  //console.log("flip");
  bottomCard.classList.remove("hideCard");
  topCard.classList.add("hideCard");
}
//compareCards function
let input = document.querySelector('input[type="text"]');
function compareCards(e) {
  e.preventDefault();
  if (input.value == activeCard.name) {
    prompter.innerHTML = "Safe!";
    //console.log("you got it");
    prompter.classList.add("green");
    prompter.classList.remove("red");
    successArray.push(activeCard);
    let newScore = eval(score.innerText);
    newScore += 1;
    score.innerText = newScore;
    console.log(successArray);
    console.log(cardArray);
    
    if (newScore === 14) {
      gameOver();
    } else {
      //next
      flipCard();
    }
  } else {
    prompter.classList.add("red");
    prompter.classList.remove("green");
    prompter.innerHTML = "You're in for a world of hurt.";
    form.classList.toggle("hideCard");
    bottomCard.classList.remove("hideCard");
    topCard.classList.add("hideCard");
    console.log(
      "Looks like you need some calamine lotion for that dermatitis!"
    );
  }
}
//game over function
let innerCardDiv = document.querySelector(".innerCardDiv");
function gameOver() {
  console.log("game over");
  prompter.innerHTML = "You've Escaped the Forest!";
  topCard.style.backgroundImage = `url(${gameOverCard.img})`;
  topCard.innerHTML = `${gameOverCard.name}`;
  topCard.classList.add("gameOver");
}

//click on picture in game board
let cardDiv = document.querySelector(".cardDiv");
cardDiv.addEventListener("click", function (e) {
  e.preventDefault();
  if (bottomCard.classList.contains("hideCard")) {
    flipCard();
  } else {
    displayTopCard();
  }
});

/*function removeCard() {
  cardArray.push(activeCard);
  console.log(cardArray);
  shuffle(cardArray);
  activeCard = cardArray.shift();
  console.log(activeCard);
  topCard.style.backgroundImage = `url(${activeCard.img})`;
  bottomCard.innerHTML = `${activeCard.name}`;
}
*/

//let input = document.querySelector('input')
//form.addEventListener("keyup", checkCard);
//form.addEventListener("submit", flipCard);

/*this is to unstick focus from reset button after click so hitting space bar wont keep resetting the game:
document.addEventListener("click", function () {
  if (document.activeElement.toString() == "[object HTMLButtonElement]") {
    document.activeElement.blur();
  }
});
*/

//spacebar key press
/*document.addEventListener("keypress", function (e) {
  e.preventDefault();
  if (e.code == "Digit0") {
    if (topCard.classList.contains("hideCard")) {
      displayTopCard();
    } else {
      flipCard();
    }
  }
});
document.addEventListener("keypress", function (e) {
  e.preventDefault();
  if (e.code == "Digit1") {
    resetGame();
  }
});
*/
