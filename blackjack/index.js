let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = "" //to store the message we get from conditionals and log it later
let messageEl = document.getElementById("message-el") // 1° p
let cardsEl = document.getElementById("cards-el") // 2° p
let sumEl = document.querySelector("#sum-el") // 3° p - more dinamic, so you gotta put # to specify ID

function startGame() {
    cardsEl.textContent += firstCard + " " + secondCard
    sumEl.textContent += sum
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
     console.log("You got a new card!")
}