// JavaScript Document
window.onload = initAll;
var usedItems = new Array(76);
var finalItems = new Array(0);
const item = ["Celebrity Appearance", "Fake/Bad Gameplay", "Fictional character makes an appearance", "\"World Premiere\" said more then 10 times", "In-engine footage", "Old game brought back with a seemingly bad gimmick ", "Popular series getting a mobile game", "Battle Royale", "BOTW 2, Bayonetta 3, or Metroid Prime 4", "Elden Ring", "Another GTA V update", "Game we know it's gonna be there should be the free space", "New Super Nintendo Switch Pro XL Deluxe annoucement", "Announcer apologizing to fans (i.e. lack of major updates)", "New DLC/Expansion for an existing game", "New IP announced early in development and is still 2+ years out", "Technical difficulties", "Ubisoft being Ubisoft", "A dev dropping a F bomb to sound cooler", "Actual Pog news", "Any Bethesda game being an Xbox exclusive", "AVAILABLE NOW", "More than 5 exclusive games", "Unsatisfying End Reveal", "Someone forgets lines / fumbles"];

// Initialization function
function initAll() {
	// If a cookie with the name 'card' exists, loads the card
	if (Cookies.get('card')) {
		loadCard();
	}
	// If a cookie with the name 'card' doesn't exist, creates a new card and then saves it
	else if (document.getElementById) {
		newCard();
		saveCard();
	}
	// Fallback if both of the other paths fail
	else {
		alert("Your browser does not support this script.");
	}
}

// Creates a new card
function newCard() {
	for (var i = 0; i < 24; i++) {
		setSquare(i);
	}
}

// Loads a card from browser cookies
function loadCard() {
	finalItems = JSON.parse(decodeURIComponent(Cookies.get('card')));
	for (var i = 0; i < 24; i++) {
		var currentSquare = "square" + i;
		document.getElementById(currentSquare).innerHTML = finalItems[i];
	}
}

// Randomly find a new item
function getNewItem() {
	return item[Math.floor(Math.random() * item.length)]
}

// Set the square as one of the unused items
function setSquare(thisSquare) {
	var currentSquare = "square" + thisSquare;
	var newItem = getNewItem();
	
	// While the item selected has already been used, randomly select a new item
	do {
		newItem = getNewItem();
	} while (usedItems[newItem]);
	
	// Set the item as used
	usedItems[newItem] = true;
	// Add the item to the array used for saving the card through browser cookies
	finalItems.push(newItem);
	
	// Put the item's text in the square
	document.getElementById(currentSquare).innerHTML = newItem;
}

// Saves the card to browser cookies.
function saveCard() {
	Cookies.set('card', JSON.stringify(finalItems), {expires: 14});
	console.log("Saving Card...")
}

// Allows the squares to be clicked on and change color to signify that they are checked
function ch() {
	this.classList.toggle("checked");
}
var items = document.querySelectorAll('div.square');
for (var i = items.length - 1; i >= 0; i--) {
	items[i].onclick = ch;
}