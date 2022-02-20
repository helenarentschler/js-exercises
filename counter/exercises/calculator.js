let num1 = 10
let num2 = 4
document.getElementById("num1-el").textContent = num1 //span
document.getElementById("num2-el").textContent = num2 //span

let sumEl = document.getElementById("sum-el") // span

function add() {
    let sum = num1 + num2
    sumEl.textContent = "Sum: " + sum 
}

function sub() {
    let sum = num1 - num2
    sumEl.textContent = "Sum: " + sum 
}

function div() {
    let sum = num1 / num2
    sumEl.textContent = "Sum: " + sum 
}

function mult() {
    let sum = num1 * num2
    sumEl.textContent = "Sum: " + sum 
}