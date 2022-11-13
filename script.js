
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
function getComputerChoice(){
    let randInt = getRandomInt(3);
    if (randInt == 0){
        return "ROCK" ;
    }
    else if (randInt == 1){
        return "PAPER" ;
    }
    return "SCISSORS" ;
    





}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == computerSelection){
        console.log("it's a tie!");
        return ;



    }
    else if (playerSelection == "ROCK"){
        if (computerSelection == "PAPER"){
            console.log("LOST!") ;
            return ;
        }
        console.log("WON!")
        return
    }
    else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            console.log("LOST!")
            return
        }
        console.log("WON!")
        return
    }
    else if (playerSelection == "SCISSORS"){
        if (computerSelection == "ROCK"){
            console.log("LOST!")
            return
        }
        console.log("WON!")
        return
    }



}
function playGame(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper or Scissors?")
        let computerSelection = getComputerChoice()
        console.log(`THIS is a test. PC choice is ${computerSelection}`)
        playRound(playerSelection, computerSelection)
        
     }






}
playGame()