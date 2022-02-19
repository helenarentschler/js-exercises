// comment a block of code selected at the same time: ctrl + k + c

let count = 0 

// asking for the html document to get us the element with the "count-el" id, wich is the h2 element that displays our counting. Then, storing it in the countEl variable. 
let countEl = document.getElementById("count-el") //h2
let saveEl = document.getElementById("save-el") //p


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    lastCount = count + " - "
    saveEl.textContent += lastCount
    count = 0
    countEl.textContent = count
}



// both .log .get are types of functions that are hooked onto objects, these we call methods.
// when we give the function some type of data beteen the parenthesis, we are passing an argument to the function.
