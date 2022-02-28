// Event listeners
    let boxEl = document.getElementById("box-el")
    console.log(boxEl)
    boxEl.addEventListener("click", function() {
        console.log("I want to open the box!")
    })

// let and const
    const name = "Helena" // default to using const
    let credits = 45 // if you now it's gonna be reassigned, use let

    //example
    const basePrice = 520
    const discount = 120
    let shippingCost = 12
    let shippingTime = "5-12 days"

    shippingCost = 15
    shippingTime = "7-14 days"

    const fullPrice = basePrice - discount + shippingCost
    console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// innerHTML - button
    const containerEl = document.getElementById("container")

    containerEl.innerHTML = "<button onclick='buy()'>BUY!</button>"

    function buy() {
        containerEl.innerHTML += "<p>Thank you for buying!</p>"
    }

// template strings (`)
    const recipient = "James"
    const sender = "Helena"
    const email = `
        Hey ${recipient}! 
        How is it going? 
        Cheers, ${sender}
    `
    console.log(email)

