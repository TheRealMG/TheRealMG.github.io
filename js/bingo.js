// JavaScript Document
window.onload = initAll;
var usedItems = new Array(76);
var finalItems = new Array(0);
const item = ["Cringe", "Technical Issues", "It Takes Two lawsuit gets brought up", "Josef Fares curses", "Silent Hill", "Metal Gear Solid", "Geoff talks about how much he loves Kojima", "Anything but Resident Evil wins GOTY", "Phil Spencer", "Cross over from a media franchise promoting an ad", "OUT NOW", "Virtual award acceptance", "A-list celebrity", "Celeb no one in the call knows", "Silksong", "Coming out in 2023 or later", "Cyberpunk 2077 DLC", "Game that looks really fucking trash", "Remaster / Remake", "Starfield", "Star Citizen", "Half Life", "Bloodborne PC", "YuGiOh", "Awkward Silence"];

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