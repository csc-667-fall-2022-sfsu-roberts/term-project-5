
class Card {
  //need to add numValue,color,effect
  constructor(color, number, effect, id) {
    this.number = number;
    this.color = color;
    this.effect = effect;
    this.id = id;
  }
}


const cardContainer = document.querySelector(".cardContainer");

// TODO need to get gameID,playerID to function
//to know what game this should take place


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

  //todo need to find cardID then remove from player hand move to PlayinCard Position
  moveCard = document.getElementById(
    value + color + special
  )

};

const drawCard = document.querySelector("#button")
const deleteCard = document.querySelector("/^\d{1,2}$/")
const card = document.querySelector(".cards")


//FOR TESTING USING BUTTONS
drawCard.addEventListener("click", (event) => {
  //todo API backend-  

  // fetch("/cards/0", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ message }),
  // });
  addCard();
});

//FOR TESTING USING BUTTONS


deleteCard.addEventListener("click", (event) => {
  var container = document.querySelector(".currentCard")
  var currentCard = document.querySelector("#playCard");
  
  //get cardID then remove card from hand
  //add that card to a junk pile or back into the deck
  
  container.replaceChild(currentCard, deleteCard);

  cardContainer.removeChild(card);
});


