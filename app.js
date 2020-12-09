document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// create the board - using a for loop 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
    // create a 'card' for each element
        var card = document.createElement('img')

    // Set attribute for each card 
        card.setAttribute('src', 'images/blank.png')
    // Loop over them giving them an ID of zero to eleven
        card.setAttribute('data-id', i)
    // To check if the card has been clicked - activate flip card function
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

// check for matches 
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    // first value in array
    const optionOneId = cardsChosenId[0]
    // second value in array 
    const optionTwoId = cardsChosenId[1]

    // when finding a match
    if (cardsChosen[0] === cardsChosen[1]) {
        alert ('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        // push winning matches to empty array 
        cardsWon.push(cardsChosen) 

    } else {
        // if they don't match, we flip them back over 
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert ('Sorry, try again')
    }
    /* if two of these things happen:
    clear the cardsChosen array
    clear cardsChosenId array */
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    // when we know we have collected all the possible cards
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

// flip your card 
function flipCard() {
    var cardId = this.getAttribute('data-id')

    // push the cards from the card array
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)

    /* when flipcard activates - a card has been picked
    add an image to the square based on the card Id */
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        /* buffer to make sure match doesn't happen too quickly
        check for match after 500 seconds */
        setTimeout(checkFormatch, 500)
    }
}

    createBoard()
})
