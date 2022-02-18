// comment a block of code selected at the same time: ctrl + k + c

// initialize the count variable with 0
let count = 0 

// asking for the html document to get us the element with the "count-el" id, wich is the h2 element that displays our counting. Then, storing it in the countEl variable. 
let countEl = document.getElementById("count-el") 

//displays the representation of the h2 element
console.log(countEl) 

function increment() {
    count = count + 1
    //assigning the h2 inner text the value of count
    countEl.innerText = count
}

// both .log .get are types of functions that are hooked onto objects, these we call methods.
// when we give the funtion some type of data beteen the parenthesis, we are passing an argument to the function.