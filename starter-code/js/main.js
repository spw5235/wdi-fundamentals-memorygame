/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";


if (cardOne === cardFour || cardTwo === cardThree) {
	alert("You found a match");
} else {
	alert("Sorry, try again");
}

*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoardID = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = '';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoardID.appendChild(cardElement);
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("Match Found");
  } else if (cards[0] != cards[1]) {
    alert("No Match, Try Again");
  }
  for (var i=0; i<cards.length; i++) {
  	var removeInner = document.getElementsByClassName('card');
  	removeInner.removeAttribute('data-card');
  }
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	var tempCard = this.getAttribute('data-card')
	if ( tempCard === 'king') {
		this.innerHTML = '<img src="king.png" alt="King">';
	} else if ( tempCard != 'king' ) {
		this.innerHTML = '<img src="queen.png" alt="Queen">'; 
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

createBoard();
