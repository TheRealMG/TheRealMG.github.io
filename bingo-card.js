// JavaScript Document
window.onload = initAll;
var usedItems = new Array(76);
const item = ["Josef Fares comes in and cusses to look cool", "Out of date meme is used", "TLOU2 wins 2 or more awards", "Reggie has the best speech", "Technical issues", "AVAILABLE NOW", "More than 5 exclusive games", "World Premier is said more than 5 times", "Voice actor presents award in character's voice", "Starfield Teaser", "New Game Reveal", "Unsatisfying End Reveal", "Sponsor Mascot", "Rune Factory 5 Gameplay", "Something Fortnite Related", "Smash Bros character reveal", "Celeb comes out to promote the game they are in", "Elden Ring", "Someone forgets lines / fumbles", "BOTW2 gameplay / trailer", "Mobile game is shown", "GTA Online promo", "Metal Gear Solid Teaser", "Covid talk"];


function initAll() {
  if (document.getElementById) {
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0; i<24; i++) {
      setSquare(i);
    }
}

/*function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}*/

function getNewItem() {
	return item[Math.floor(Math.random() * item.length)]
}

function setSquare(thisSquare) {
	var currentSquare = "square" + thisSquare;
	var newItem = getNewItem();
	
	do {
		newItem = getNewItem();
	} while (usedItems[newItem]);
	
	usedItems[newItem] = true;
	document.getElementById(currentSquare).innerHTML = newItem;
}