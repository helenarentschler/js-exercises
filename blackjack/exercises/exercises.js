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
        let featuredPosts = [
            "Check out my Netflix clone", 
            "Here's the code for my project", 
            "I've relaunched my portfolio"
        ]

        console.log(featuredPosts[0]) 
        console.log(featuredPosts.length) //3

        //my string array - 1 data type (string)
            let mySkills = ["HTML5", "CSS3", "JavaScript", "C", "Statistics"]
                            // 0       1          2         3        4

        // multiple data types 
            let myself = ["Helena Rentschler", 19, true]

        // push method: add item to the end of an array
            let cards = [3, 1]
            cards.push(4)
            console.log(cards)

            let messages = [
                "Hello, how are you?",
                "I'm great, how about you?",
                "All good. Been working on my project today."
            ]

            let newMessage = "Same here!"

            messages.push(newMessage)
            console.log(messages)
            messages.pop() //deletes the last item of an array
            console.log(messages)
        
        // For loop: START LINE / FINISH LINE / STEP SIZE
            // for (let count = 10; count < 21; count += 1) {
            //     console.log(count)
            // }

            // for (let i = 0; i < 6; i += 1) {
            //     console.log(i)
            // }

            for (let i = 10; i < 101; i += 10) {
                console.log(i)
            }

            // for loop + messages array (up there: line 53 - 64)
                for (let i = 0; i < 3; i += 1) {
                    console.log(messages[i])
                }
