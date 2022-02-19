// math operations - convert my age into dog years
    // let myAge = 19
    // let humaDogRatio = 7
    // let myDogAge = myAge * humaDogRatio
    // console.log(myDogAge)

// increment - bonus
    // let bonusPoints = 50
    // bonusPoints = bonusPoints + 50
    // bonusPoints = bonusPoints - 75
    // bonusPoints = bonusPoints + 45
    // console.log(bonusPoints)

// functions - race game
    
    // function countdown () {
    //     console.log(5)
    //     console.log(4)
    //     console.log(3)
    //     console.log(2)
    //     console.log(1)
    // }

    // // setting up the race:
    // countdown () //calling fuction

    // // starting again:
    // countdown ()

    // creating a function that logs out the sum of all the lap times
        // let lap1 = 34
        // let lap2 = 33
        // let lap3 = 36

        // function LogLapSum () {
        //     let sum = lap1 + lap2 + lap3
        //     console.log(sum)
        // }

        // LogLapSum ()
        // console.log(sum) (does not work, let variables are block scoped)

    // creating a function that increment laps 
        // let lapsCompleted = 0

        // function addLap () {
        //     lapsCompleted = lapsCompleted + 1
        // }
        // addLap ()
        // addLap ()
        // addLap ()
        // console.log(lapsCompleted)

// strings

    // let username = "Helena" // double/single quotes go by preference
    // console.log(username)

    // let message = "You have 3 new notifications"
    // console.log(message)

    // let messageToUser =  message + ", " + username + "!"
    // console.log(messageToUser)

    // greeting exercise
        // let myName = "Helena Rentschler"
        // let greeting = "Hi, my name is "
        // let myGreeting = greeting + myName
        // console.log(myGreeting)

    // string + number
        // console.log(4 + 5) //9 number
        // console.log(4 + "5") //"45" string
        // console.log("4" + 5) //"45" string
        // console.log("4" + "5") //"45" string

    //Display welcome message to user
        let welcomeEl = document.getElementById("welcome-el")
        console.log(welcomeEl)

        let myName = "Helena Rentschler"
        let myGreeting = "Welcome back, "
        
        welcomeEl.innerText = myGreeting + myName + "!"
        welcomeEl.innerText += " :)" // same as welcomeEl.innerText = welcomeEl.innerText + " :)"