const color = ['red', 'blue', 'yellow', 'green', 'wild'];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12];
const special = ['none', 'skip', 'reverse', 'addTwo', 'addFour'];

const cardContainer = document.querySelector(".cardContainer");

// TODO need to get gameID,playerID to function
//to know what game this should take place
let spriteSheet = "/../images/cards.png";

function addCard() {
    const container = document.querySelector(".cardContainer");
    const div = document.createElement("div");
    div.classList.add("cards");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");
    
    container.appendChild(div.appendChild(cardDiv));
};

function removeCard() {

//todo need to find cardID then remove from player hand 
//and add to junkpile/discarded cards

};

const drawCard = document.querySelector("#button")
const deleteCard = document.querySelector("#button2")

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
  // WIP

  //get cardID then remove card from hand
  //add that card to a junk pile or back into the deck
    removeCard();
});


