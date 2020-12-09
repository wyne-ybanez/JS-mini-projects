document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
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
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'ice-cream',
        img: 'images/icecream.png'
      },
      {
        name: 'ice-cream',
        img: 'images/icecream.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
  ]

const grid = document.querySelector('.grid')

// Create the board - using a for loop
// create a 'card' for each element 
function createBoard() {
    for (let i = 0; i < cardArray.length; i ++) {
        var card = document.createElement('img')

    // Set attribute for each card 
        card.setAttribute('src', 'image/blank.png')
    // Loop over them giving them an ID of zero to eleven
        card.setAttribute('data-id', i)
    // To check if the card has been clicked - activate flip card function
        // card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard();

})