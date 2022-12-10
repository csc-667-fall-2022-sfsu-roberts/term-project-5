//card mapping notes
// to mapping colors shift -285px
// red y-pos =  0   | blu y-pos = -285 | 
// ylw y-pos = -570 | grn y-pos = -855

// to mapping numbers or effects shift -200px
// card number "1" x-pos = -200 | card number "3" x-pos = -400
// card number "2" x-pos = -600 | card number "4" x-pos = -800

// card effect "skip"       x-pos = -2000
// card effect "reverse"    x-pos = -2200
// card effect "add2cards"  x-pos = -2400

// WILD CARDS only up to 
class Card {
  //need to add numValue,color,effect
  
  constructor() {
    this.cardHeight = 258;
    this.cardWidth= 172;

    //this.value = value;
    //this.color= color;
    //this.effect= effect;
  }
 
}

const card = new Card();
//need to creates cards for each card
for(i=0;i>13;i++){

  function createCard() {
    card.draw("2d");
  }
}