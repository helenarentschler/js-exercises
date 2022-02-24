// if statements = age limit
    // let age = 18

    // if (age < 18) {
    //     console.log("Go home.")
    // } else {
    //     console.log("You can get in!")
    // }

    // birthday card from the king
        // let age = 100
        // if (age < 100) {
        //     console.log("Not elegible")
        // } else if (age === 100) { 
        //     console.log("Here is your birthday card from the king!")
        // } else {
        //     console.log("You have one already!")
        // }
        
            // triple equals (===) are preferable cause they are more strict

    // boolean
        // console.log(4 === 3) //false
        // console.log(5 > 2) //true
        // console.log(12 > 12) //false
        // console.log(3 < 0) //false
        // console.log(3 >= 3) //true
        // console.log(11 <= 11) //true
        // console.log(3 <= 2) //false
    
    // arrays - complex data types (have multiple data tipes)
        // let featuredPosts = [
        //     "Check out my Netflix clone", 
        //     "Here's the code for my project", 
        //     "I've relaunched my portfolio"
        // ]

        // console.log(featuredPosts[0]) 
        // console.log(featuredPosts.length) //3

        //my string array - 1 data type (string)
        // let mySkills = ["HTML5", "CSS3", "JavaScript", "C", "Statistics"]
                            // 0       1          2         3        4

        // multiple data types 
            // let myself = ["Helena Rentschler", 19, true]

        // push method: add item to the end of an array
            // let cards = [3, 1]
            // cards.push(4)
            // console.log(cards)

            // let messages = [
            //     "Hello, how are you?",
            //     "I'm great, how about you?",
            //     "All good. Been working on my project today."
            // ]

            // let newMessage = "Same here!"

            // messages.push(newMessage)
            // console.log(messages)
            // messages.pop() //deletes the last item of an array
            // console.log(messages)
        
    // For loop: START LINE / FINISH LINE / STEP SIZE
        // for (let count = 10; count < 21; count += 1) {
        //     console.log(count)
        // }

        // for (let i = 0; i < 6; i += 1) {
        //     console.log(i)
        // }

        // for (let i = 10; i < 101; i += 10) {
        //     console.log(i)
        // }

        // messages.push("Awesome!")

        // for loop + messages array (up there: line 53 - 64)
            // for (let i = 0; i < messages.length; i += 1) {
            //     console.log(messages[i])
            // }

        // console card for loop (card array in line  49)
            // for (let i = 0; i < cards.length; i ++) {
            //     console.log(cards[i])
            // }

        // let sentence = ["Hello", "my", "name", "is", "Helena"]
        // let greetingEl = document.getElementById("greeting-el") //p

        // for (let i = 0; i < sentence.length; i++) {
        //     greetingEl.textContent += sentence[i] + " "
        // }
    
    // Return values in functions
        // let player1Time = 102
        // let player2Time = 80

        // function getFastestRaceTime () {
        //     if (player1Time < player2Time) {
        //         return player1Time
        //     } else if (player2Time < player1Time) {
        //         return player2Time
        //     } else {
        //         return player1Time
        //     }
        // }

        // let fastestRace = getFastestRaceTime()
        // console.log(fastestRace)
        // console.log(getFastestRaceTime())

        // function getTotalRaceTime () {
        //     return player1Time + player2Time
        // }

        // let totalTime = getTotalRaceTime ()
        // console.log(totalTime)
    
    // Random  numbers
        //Math.random() returns a valeu between 0 and 0.999...
        // let RandomNumber = Math.random() 
        // console.log(RandomNumber)

        // dice function: 
        //Math.random() * 6 returns a value between 0 and 5.999...
            // let DiceNumber = Math.random() * 6
            // console.log(DiceNumber)

        // Flooring numbers - it removes the decimals
            // let flooredNumber = Math.floor(7.739)
            // console.log(flooredNumber)
        
        // better dice function
            // function rollDice() {
            //    let randomNumber = Math.floor(Math.random() * 6) + 1
            //    return randomNumber
            // }

            // let diceNumber = rollDice()
            // console.log(diceNumber)
    
    // Logical operators
        // and - &&
            // let hasCompletedCourse = true
            // let CourseGivesCertificate = true

            // if (hasCompletedCourse === true && CourseGivesCertificate === true) {
            //     generateCertificate()
            // } else {
            //     console.log("You can't get a certificate")
            // }

            // function generateCertificate() {
            //     console.log("Generating certificate...")
            // }

            // let hasSolvedChallenge = false
            // let hasHintsLeft = false

            // if (hasSolvedChallenge === false && hasHintsLeft === false) {
            //     showSolution()
            // }

            // function showSolution() {
            //     console.log("Showing the solution...")
            // }
        
        // or - ||
            // let likesDocumentaries = false
            // let likesStartUps = true

            // if (likesDocumentaries === true || likesStartUps === true) {
            //     recommendMovie()
            // }

            // function recommendMovie() {
            //     console.log("Hey! Check out this film, we think you'll like it!")
            // }
        
        // objects - key-value pairs
            // let course = {
            //     title: "Learn CSS",
            //     lessons: 16,
            //     creator: "John",
            //     length: 63,
            //     level: 2,
            //     isFree: true,
            //     tags: ["HTML5", "CSS3"]
            // }

            // console.log(course.length)
            // console.log(course.tags[1])
            // console.log(course.tags)
            // console.log(course["tags"]) //bracket notation
        
            // let castle = {
            //     name: "San Giusto",
            //     acceptGuest: true,
            //     price: 180,
            //     images: ["img/castle1.png", "img/castle2.png"]
            // }

            // console.log(castle.name)
            // console.log(castle.images[1])

// practice
        // objects and functions
            // let person = {
            //     name: "Helena",
            //     age: 19,
            //     country: "Brasil"
            // }

            // function logData() {
            //     console.log(person.name + " lives in " + person.country + " and is " + person.age + " years old.")
            // }

            // logData()

        // if statements
            //  let age = 66

            //  if (age < 6) {
            //     console.log("Free pass")
            //  } else if (age < 18) {
            //     console.log("Child discount")
            //  } else if (age < 27) {
            //     console.log("Student discount")
            //  } else if (age < 67) {
            //     console.log("Full price")
            //  } else {
            //      console.log("Senior discount")
            //  }
        
        // loops and arrays 
            //  let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
            //  largeCountries.pop()
            //  largeCountries.push("Pakistan")
            //  largeCountries.shift()
            //  largeCountries.unshift("China")
            //  console.log("The 5 largest populations in the world:")
            //  for (let i = 0; i < largeCountries.length; i++) {
            //      console.log("- " + largeCountries[i])
            //  }
        
        // logical operators
             let dayOfMonth = 13
             let weekDay = "friday"

             if (dayOfMonth === 13 && weekDay === "friday") {
                console.log("spooky!")
             }
        
        // random numbers
             let hands = ["rock", "paper", "scissors"]

             function getHand() {   
                let i = Math.floor(Math.random() * 3)
                return hands[i]
             }

             console.log(getHand())
        
        // sorting fruits     
        
             let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"]
             let appleShelf = document.getElementById("apple-shelf")
             let orangeShelf = document.getElementById("orange-shelf")
 
             function sortFruits() {
                for (let i = 0; i < fruits.length; i++){
                    if (fruits[i] === "🍎") {
                        appleShelf.textContent += fruits[i]
                    } else if (fruits[i] === "🍊") {
                        orangeShelf.textContent += fruits[i]
                    }
                }
             }

             sortFruits()