 // JavaScript Document
window.onload = initAll;
var usedItems = new Array(76);
const item = ["Celebrity Appearance", "Fake/Bad Gameplay", "Fictional character makes an appearance", "\"World Premiere\" said more then 10 times", "In-engine footage", "Old game brought back with a seemingly bad gimmick ", "Popular series getting a mobile game", "Battle Royale", "BOTW 2, Bayonetta 3, or Metroid Prime 4", "Elden Ring", "Another GTA V update", "Game we know it's gonna be there should be the free space", "New Super Nintendo Switch Pro XL Deluxe annoucement", "Announcer apologizing to fans (i.e. lack of major updates)", "New DLC/Expansion for an existing game", "New IP announced early in development and is still 2+ years out", "Technical difficulties", "Ubisoft being Ubisoft", "A dev dropping a F bomb to sound cooler", "Actual Pog news", "Any Bethesda game being an Xbox exclusive", "AVAILABLE NOW", "More than 5 exclusive games", "Unsatisfying End Reveal", "Someone forgets lines / fumbles"];


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

function ch() {
	this.classList.toggle("checked");
}

var items = document.querySelectorAll('div.square');
for (var x = items.length - 1; x >= 0; x--) {
	items[x].onclick = ch;
}