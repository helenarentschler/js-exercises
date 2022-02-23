let player = {
    name: "Helena",
    chips: 105
}
let cards = [] //array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
let messageEl = document.getElementById("message-el") // 1° p
let cardsEl = document.getElementById("cards-el") // 2° p
let sumEl = document.querySelector("#sum-el") // 3° p 
let playerEl = document.getElementById("player-el") // last p

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() { 
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        renderGame()
    }
    
}