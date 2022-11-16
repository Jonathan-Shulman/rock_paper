let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, playerScore, computerScore){
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == computerSelection){
        console.log("it's a tie!");
        return ;



    }
    else if (playerSelection == "ROCK"){
        if (computerSelection == "PAPER"){
            console.log("LOST!") ;
            computerScore= computerScore + 1;
            return ;
        }
        console.log("WON!");
        playerScore= playerScore + 1;
        return
    }
    else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            console.log("LOST!");
            computerScore= computerScore + 1;
            return
        }
        console.log("WON!");
        playerScore= playerScore + 1;
        return
    }
    else if (playerSelection == "SCISSORS"){
        if (computerSelection == "ROCK"){
            console.log("LOST!");
            computerScore= computerScore + 1;
            return
        }
        console.log("WON!");
        playerScore= playerScore + 1;
        return
    }



}

const rock_btn = document.querySelector("button#rock");
rock_btn.addEventListener('click', function(e){
    playRound("rock", playerScore, computerScore);


});
const paper_btn = document.querySelector("button#paper");
paper_btn.addEventListener('click', function(e){
    playRound("paper", playerScore, computerScore);


});
const scissors_btn = document.querySelector("button#scissors");
scissors_btn.addEventListener('click', function(e){
    playRound("scissors", playerScore, computerScore);


});