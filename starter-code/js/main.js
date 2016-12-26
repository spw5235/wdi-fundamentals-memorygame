
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

/*
if (cardOne === cardFour || cardTwo === cardThree) {
	alert("You found a match");
} else {
	alert("Sorry, try again");
}
*/

var gameBoardID = document.getElementById("game-board");

function createCards() {
	for ( i = 0; i < 4; i++ ) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
		cardDiv.innerHTML = '';
		gameBoardID.appendChild(cardDiv);
	}
}

createCards();
