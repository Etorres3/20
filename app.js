alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \n\n You will draw numbers from 1 to 10. The computer will stop at 16. \n\n Pay attention to the screen to see what your total is, and if you need another number, press 'y'.")

alert("It is the computers turn")

var com = 0

var hum = 0

var human = 0

var computer = 0

do {
        
    var com = 0

    var hum = 0

    do {
         

        var ran = Math.floor(Math.random() * 10) + 1
        
        var com = com + ran

        alert(`The computer got ${ran}. The number is now ${com}`)

    } while (com <= 16)

    if (com > 20) {

        alert("The computer went over 20, you won!")
        human++
            
    } else{

    alert("It's your turn now");

    do {
    
        var rand = Math.floor(Math.random() * 10) + 1
    
        var hum = hum + rand

        console.log(hum)

        if (hum >= 20) {
            break
        }
           
        var yes = prompt(`Your total is ${hum}. If you would like to play another number press 'y' otherwise type f`)
    
    } while ((yes != "f") && (hum < 20))
    
    
    if ((com  > hum ) && (hum <= 20) && (com <= 20)) {
        alert("You lost!")
        computer++
    }
    
    else if ((hum  > com) && (hum <= 20) && (com <= 20)) {
        alert("you won!")
        human++
    }
    
    else if (hum == com) {
        alert("It's a tie!")
    }

    else {
        alert("you lost!")
        computer++
    }
    

    }

    var exit2 = prompt(`The score is ${human}-${computer}. If you wish you keep playing press enter. If you wish to exit type 'y'.`)


}while(exit2 != "exit" && exit2 != "y")

alert(`you have successfuly exited. The final score is ${human}-${computer}`)