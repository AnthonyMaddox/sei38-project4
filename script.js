//start building some things on the page with js so you can feel having access to them
//pics from https://www.webmd.com/skin-problems-and-treatments/ss/slideshow-poison-plants-guide
//let cardDiv = document.querySelector(".cardDiv");
let cardArray = [];
function resetGame() {
  let cardArray = [];
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
  const hemlock = new Flashcard("Hemlock", "imgs/ivy.jpg");
  const oleander = new Flashcard("Oleander", "imgs/oleander.jpg");
  const parnsnip = new Flashcard("Parnsnip", "iimgs/parnsnip.jpg");
  const nettle = new Flashcard("Stinging Nettle", "imgs/nettle.jpg");
  const nightshade = new Flashcard("Nightshade", "imgs/nightshade.jpg");
  const azalea = new Flashcard("Azalea", "imgs/azalea.jpg");
  const mistletoe = new Flashcard("Mistletoe", "imgs/mistletoe.jpg");
  const hogweed = new Flashcard("Hogweed", "imgs/hogweed.jpg");
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
    hogweed
  );
  console.log(cardArray);
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
  shuffle(cardArray);
}

console.log(cardArray);
//reset game button
let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetGame);

//prompter test field
let prompter = document.querySelector(".prompter");
prompter.innerHTML = "Please Reset the Game";
prompter.classList.add("green");

//game board
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

function flipCard() {
  //at card div eventlistener
}
function compareCards() {
  console.log("compareCards function");
}

//let form = document.querySelector('form')
//form.addEventListener("keyup", checkCard);
//form.addEventListener("submit", flipCard);
//let newCard;
