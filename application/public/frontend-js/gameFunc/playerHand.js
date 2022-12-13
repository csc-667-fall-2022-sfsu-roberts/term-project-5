const color = ['red', 'blue', 'yellow', 'green', 'wild'];
const number = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
const special = ['none', 'skip', 'reverse', 'addTwo', 'addFour'];

// WILD CARDS only up to 
class Card {
  //need to add numValue,color,effect
  
  constructor(color,number,effect,id) {
    this.number = number;
    this.color= color;
    this.effect= effect;
    this.id=id;
  }
  

}

function createDeck(){
  color.forEach(colorVal => {
    let counter = 0;
    if (colorVal == "wild") {
      //need to get addfour and wildcard
    }
    number.forEach(numVal => {
      var efx = special[0];
      switch(numVal) {
        case "ten": efx = special[1];
          break;
        case "eleven": efx = special[2];
          break;
        case "twelve": efx = special[3];
          break;
      }
 
    console.log(colorVal+" "+numVal+" "+efx);
     
  //const card = new Card(colorVal,numVal,efx,counter);
  counter++;
  //console.log(card.color);
    });
  });
}


