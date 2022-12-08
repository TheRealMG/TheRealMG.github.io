// JavaScript Document
window.onload = initAll;
var usedItems = new Array(76);
var finalItems = new Array(0);
const item = ["Cringe","BOTW 2 Gameplay","Tekken 8 Release Date" ,"Late to Start","Starfield Gameplay/Hard Release Date","Mascot for Ad","Reggie Speech","Arc System Announcement","Skyrim Anything","Sony Game Revealed for PC","Fallout TV Show Footage","Technical Difficulties","Presenter Misreads Game Title","Sonic Frontiers Winning Any Award","Mother 3","Handshake Gets Ignored","Awkward Pause That Lasts for More Than 4 Seconds","Valve Announcement","Random Celeb Shows Up","Anything Rockstar","Gameplay That Includes Frame Drops","Yakuza News","Josef Fares","Wolf Among Us News","New Nintendo Announcement","Final Fantasy News","Epic Exclusive","Available NOW","To Be Released 2024+","Among Us"];

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
	for (var i = 1; i < 25; i++) {
		setSquare(i);
	}
}

// Loads a card from browser cookies
function loadCard() {
	finalItems = JSON.parse(decodeURIComponent(Cookies.get('card')));
	for (i = 1; i < 25; i++) {
		document.querySelector(`.square:nth-of-type(${i})`).innerHTML = finalItems[i];
	}
}

// Randomly find a new item
function getNewItem() {
	return item[Math.floor(Math.random() * item.length)]
}

// Set the square as one of the unused items
function setSquare(i) {
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
	document.querySelector(`.square:nth-of-type(${i})`).innerHTML = newItem;
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
var freespace = document.querySelectorAll('img.free-space');
freespace.onclick = ch;
