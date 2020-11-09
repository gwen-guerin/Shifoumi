const imageArr = ["papier.jpg","caillou.jpg","ciseaux.jpg"]

// JE RECUPERE L'ID DE L'IMAGE CLIQUÉE 

let pcc = document.getElementsByClassName("pcc")
let userScore = 0
let botScore = 0 
const phrase = "L'ordi a joué " 
let timeElt = document.getElementById("timer");
let counter = 5;
let timer

for (var i = 0 ; i < pcc.length; i++) {
    pcc[i].addEventListener('click' , showpcc )
    
    
    
    function showpcc () {
        if (timer) clearInterval(timer)
        counter = 5
            
            
            let userChoice = this.id
            // console.log(userChoice)   
            // JE CRÉER UN CHOIX RANDOM DE L'ORDI 
            let num = Math.random()
            if (num <= 0.3333) {
                num = "papier"
            } else if (0.3333 < num && num <= 0.6666) {
                num = "caillou"
            } else {
                num = "ciseaux"
            }
            // console.log("botChoice " + num)
            // console.log("myChoice "+ userChoice)
            let outcome
            let text 
            switch (num) {
                case "ciseaux": 
                    if (userChoice === "ciseaux") {
                        outcome = "Égalité";
                    } else if (userChoice === "caillou") {
                        outcome = "You win !";
                    } else { 
                        outcome = "You lose ...";
                    }
                    break;
                
                    case "caillou":
                    if (userChoice === "ciseaux") {
                        outcome = "You lose ...";
                    } else if (userChoice === "caillou") {
                        outcome = "Égalité";
                    } else {
                        outcome = "You win !";
                    }
                    break;
                    
                case "papier": 
                if (userChoice === "ciseaux") {
                    outcome = "You win !";
                } else if (userChoice === "caillou") {
                    outcome = "You lose ...";
                } else {
                    outcome = "Égalité";
                }
                    break;
                    default: text = "Choose again.."
                    break;
                }
                // AFFICHAGE DU SCORE 
                
                if (outcome === "You win !") {
                    userScore = userScore + 1
                        document.getElementById("userScore").innerHTML = userScore
                        document.getElementById("botScore").innerHTML = botScore
                        
                    } else if (outcome === "You lose ...") {
                        botScore = botScore + 1
                        document.getElementById("userScore").innerHTML = userScore
                        document.getElementById("botScore").innerHTML = botScore
                        
                    } else { 
                        document.getElementById("userScore").innerHTML = userScore
                        document.getElementById("botScore").innerHTML = botScore
                    }
                    
                    document.getElementById("winner").innerHTML = phrase + num + " :" + outcome

                    // Set a FOOOCKIN timer

                    timer = setInterval(function(){
                        timeElt.innerHTML = counter
                        counter = counter - 1
                    if(counter === 0) {
                        setTimeout(function(){
                            timeElt.innerHTML = "Time's up !"
                            botScore = botScore + 1
                            clearInterval(timer)
                        }, 1000)
                    }
                    }, 1000)
                }
            }
            
            
            
            
            
            
            
            
            
            
            
    
    

