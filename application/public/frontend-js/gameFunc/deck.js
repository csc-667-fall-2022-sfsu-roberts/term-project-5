class Card {
  constructor(color, number, effect, id) {
    this.number = number;
    this.color = color;
    this.effect = effect;
    this.id = id;
  }
}


const cardContainer = document.querySelector(".cardContainer");

function addCard() {
  const container = document.querySelector(".cardContainer");
  const div = document.createElement("div");
  div.classList.add("cards");

  const cardDiv = document.createElement("div");

  cardDiv.getColor
  cardDiv.classList.add("cards");
  cardDiv.classList.add('blue');
  cardDiv.classList.add('reverse');
  
  // then add to player hand
  container.appendChild(div.appendChild(cardDiv));
};

function removeCard() {
  moveCard = document.getElementById(
    value + color + special
  )
};

const drawCard = document.querySelector("#button")
const card = document.querySelector(".cards")

drawCard.addEventListener("click", (event) => {
  addCard();
});

