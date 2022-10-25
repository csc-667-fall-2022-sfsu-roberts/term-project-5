//value = 0...9/skip/reverse/+2/+4 , colors = red, blue, yellow, green, rainbow
const card = ['image', 'value', 'color'];
//let deck = [], reds = [], blues = [], yellows = [], greens = [], rainbows = [['0','rainbow'],['+4','rainbow']];
deck = createDeck();
let CompleteDeck = [];
function player() {
  this.hand = [];
}
//limit player to 4
let playerList = [], waitList = [], randomPlayer1 = new player, randomPlayer2 = new player;

playerList.push(randomPlayer1, randomPlayer2);

function game(currentDeck,playerList){
    while(!checkWinner){
      playerTurn(playerList[0],cardsPlayed);
      if(checkWinner){
        return;
      }
      playerTurn(playerList[1],cardsPlayed);
      if(playerList.length>2){
        if(checkWinner){
          return;
        }
        playerTurn(playerList[2],cardsPlayed);
      }
      if(playerList.length>3){
        if(checkWinner){
          return;
        }
        playerTurn(playerList[3],cardsPlayed);
      }
    }
    
}
function setup(deck,playerList){
  let currentDeck = JSON.parse(JSON.stringify(deck));
    currentDeck = shuffleDeck(currentDeck);
    playerList = playerGetsCards(playerList);
    let cardsPlayed = [];
    cardsPlayed.push(currentDeck.pop());
    game(currentDeck,playerList);

}

function playerTurn(player,cardsPlayed){
  playerList[0] = drawCard(playerList[0],currentDeck);
  //play card
  cardsPlayed.push

  return cardsPlayed;
}
function drawCard(player,currentDeck){
  player.hand.push(currentDeck.pop());
  return player;
}
function checkWinner(playerList){
  for(let player of playerList){
    if(player.hand.length >0){
      return false;
    }
    return true;
  }
}

function shuffleDeck(currentDeck){
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = currentDeck[i];
        currentDeck[i] = currentDeck[j];
        currentDeck[j] = temp;
      }
      return deck;
}
function playerGetsCards(playerList){
  for(let i = 0; i < 7; i++){
    for(let player of playerList){
      player.hand.push(currentDeck.pop());
    }
  }
  return playerList;
}
function checkPlayerSize(playerList,waitList){
  if(playerList.length>4){
    waitList.push(playerList.pop());
  }
  if(playerList.length<4 && waitList.length>0){
    playerList.push(waitList.shift());
  }
}

function createDeck(){
  let deck = [], reds = [], blues = [], yellows = [], greens = []; rainbows = [['','0','rainbow'],['','+4','rainbow']];
  reds = createColorDeck('red');
  blues = createColorDeck('blue');
  yellows = createColorDeck('yellow');
  greens = createColorDeck('green');
  deck = deck.concat(reds,[rainbows[0]],blues,[rainbows[0]],yellows,[rainbows[0]],greens,[rainbows[0]]);
  deck = deck.concat(reds.slice(1,reds.length),[rainbows[1]],blues.slice(1,blues.length),[rainbows[1]],yellows.slice(1,yellows.length),[rainbows[1]],greens.slice(1,greens.length),[rainbows[1]]);
  return deck;
}
function createColorDeck(color){
  const colorDeck=[];
    for(let i =0;i<=9;i++){
      colorDeck.push(['',(i).toString(),color]);
    }
    colorDeck.push(['','skip',color],['','reverse',color],['','+2',color]);
  return colorDeck;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const deckImage = new Image();
deckImage.src = 'deck.png';
deckImage.onload = processDeck;

function processDeck(){
  let cardWidth = deckImage.width/3.0075, cardHeight = deckImage.height/4.5275;
  let deckColumn = -249.5, deckRow = -248.75;
  let tempdeckIndex = 0;
  for(let column = 0; column < 13; column++){
    for(let row = 0; row <8;row++){
      ctx.drawImage(deckImage, deckColumn*column, deckRow*row, cardWidth, cardHeight);
      //toDataURL(type, encoderOptions/ImageQuality);
      let cardPath = document.createElement('card'); 
      cardPath.href = document.getElementById('canvas').toDataURL("image/jpeg", 1);
      deck[tempdeckIndex] = [cardPath.href,deck[tempdeckIndex][1],deck[tempdeckIndex][2]];
      tempdeckIndex++;
      //Clear Canvas to safe memory usage
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}
/*
const singularCard = new Image();
singularCard.onload = drawCardImage;
//console.log(deck);
function drawCardImage(){
  ctx.drawImage(deck[102][0],0,0);
}*/