//start building some things on the page with js so you can feel having access to them...
//pics from https://www.webmd.com/skin-problems-and-treatments/ss/slideshow-poison-plants-guide
/*need flip animation on keypress*/

let cardArray = [];
let successArray = [];
let activeCard = {};
let body = document.querySelector("body");
let cardDiv = document.querySelector(".cardDiv");
let innerCardDiv = document.querySelector(".innerCardDiv");
let topCard = document.querySelector(".topCard");
let bottomCard = document.querySelector(".bottomCard");
bottomCard.classList.add("hideCard");
let prompter = document.querySelector(".prompter");
prompter.innerHTML = "Enter the Forest...";
prompter.classList.add("green");
let form = document.querySelector("form");
let input = document.querySelector('input[type="text"]');
form.addEventListener("submit", compareCards);
let score = document.querySelector(".score");
let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetGame);
let bottomP = document.querySelector(".bottomP");
let wmdPara = document.querySelector("#webmd-para");
bottomCard.innerHTML =
  "Enter your guess before you flip the card over or, you'll never leave.";
bottomCard.classList.add("instructions");

//click on picture or right key down to flip card

cardDiv.addEventListener("click", function (e) {
  e.preventDefault();
  if (bottomCard.classList.contains("hideCard")) {
    flipCard();
  } else {
    displayTopCard();
  }
});

body.addEventListener("keydown", function (e) {
  let keycode = e.charCode || e.keyCode;
  if (keycode === 39) {
    //e = e || window.e;
    if (bottomCard.classList.contains("hideCard")) {
      flipCard();
    } else {
      displayTopCard();
    }
  }
});

//Deck

class Flashcard {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}
const ivy = new Flashcard("poison ivy", "imgs/ivy.jpg");
const oak = new Flashcard("poison oak", "imgs/oak.jpg");
const sumac = new Flashcard("poison sumac", "imgs/sumac.jpg");
const foxglove = new Flashcard("foxglove", "imgs/foxglove.jpg");
const jimsonweed = new Flashcard("jimsonweed", "imgs/jimsonweed.jpg");
const hemlock = new Flashcard("hemlock", "imgs/hemlock.jpg");
const oleander = new Flashcard("oleander", "imgs/oleander.jpg");
const parnsnip = new Flashcard("parnsnip", "imgs/parnsnip.jpg");
const nettle = new Flashcard("stinging nettle", "imgs/nettle.jpg");
const nightshade = new Flashcard("nightshade", "imgs/nightshade.jpg");
const azalea = new Flashcard("azalea", "imgs/azalea.jpg");
const mistletoe = new Flashcard("mistletoe", "imgs/mistletoe.jpg");
const hogweed = new Flashcard("hogweed", "imgs/hogweed.jpg");
const trumpet = new Flashcard("creeping trumpet", "imgs/trumpet.jpg");
const gameOverCard = new Flashcard("You Escaped the Forest!", "deckTop.jpg");

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

//resetGame function

function resetGame() {
  cardArray = [];
  successArray = [];
  input.value = "";
  wmdPara.classList.add("hideCard");
  bottomP.classList.add("hideForm");
  topCard.classList.remove("gameOver");
  topCard.innerHTML = "";
  score.innerHTML = 0;
  //cardDiv.style.backgroundImage = 'none'
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
  topCard.style.backgroundImage = `url(${activeCard.img})`;
  bottomCard.innerHTML = `${activeCard.name}`;
  bottomCard.classList.add("hideCard");
  topCard.classList.remove("hideCard");
  prompter.innerText = "Be Careful...";
  bottomCard.classList.remove("instructions");
  form.classList.remove("hideForm");
}

//displayTopCard and flip functions

function displayTopCard() {
  console.log(activeCard);
  console.log(cardArray);
  input.value = "";
  //cardDiv.focus();
  input.focus();
  form.classList.toggle("hideForm");
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

function flipCard() {
  form.classList.toggle("hideForm");
  bottomCard.classList.remove("hideCard");
  topCard.classList.add("hideCard");
}
//compareCards function

function compareCards(e) {
  input.value = input.value.toLowerCase();
  e.preventDefault();
  if (input.value.toLowerCase() == activeCard.name.toLowerCase()) {
    let newScore = eval(score.innerText);
    newScore += 1;
    score.innerText = newScore;
    prompter.innerHTML = "Safe!";
    prompter.classList.add("green");
    prompter.classList.remove("red");
    successArray.push(activeCard);
    if (newScore === 14) {
      gameOver();
    } else {
      flipCard();
    }
  } else {
    prompter.classList.add("red");
    prompter.classList.remove("green");
    prompter.innerHTML = "You're in for a world of hurt.";
    form.classList.add("hideForm");
    bottomCard.classList.remove("hideCard");
    topCard.classList.add("hideCard");
  }
}
//game over function

function gameOver() {
  wmdPara.classList.remove("hideCard");
  prompter.innerHTML = "Don't forget what you learned.";
  topCard.style.backgroundImage = `url(${gameOverCard.img})`;
  topCard.innerHTML = `${gameOverCard.name}`;
  topCard.classList.add("gameOver");
  input.value = "";
}

/*body.addEventListener("keydown", function (e) {
  let keycode = e.charCode || e.keyCode;
  if (keycode === 39) {
    if (document.setActive) {
      cardDiv.setActive();
    } else {
      if (document.focus) {
        cardDiv.focus();
      } else {
        console.log("something is wrong");
      }
    }
  }
});
*/
