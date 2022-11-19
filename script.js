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

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    let curscore = document.querySelector("#cur-score");
    let cur = curscore.textContent;
    let playerScore = cur.charAt(0)
    let computerScore = cur.charAt(2)
    let msg = document.querySelector('#msg')
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == computerSelection){
        console.log("it's a tie!");
        return ;



    }
    else if (playerSelection == "ROCK"){
        if (computerSelection == "PAPER"){
            console.log("LOST!") ;
            computerScore= `${parseInt(computerScore)+ 1}`;
            curscore.textContent = `${playerScore}-${computerScore}`;
            return ;
        }
        console.log("WON!");
        playerScore= `${parseInt(playerScore)+ 1}`;
        curscore.textContent = `${playerScore}-${computerScore}`;
        return
    }
    else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            console.log("LOST!");
            computerScore= `${parseInt(computerScore)+ 1}`;
            curscore.textContent = `${playerScore}-${computerScore}`;
            if (playerScore=="5" || computerScore=="5"){
                if (parseInt(playerScore)>parseInt(computerScore)){
                    msg.textContent = 'You Lost! press "play again" to restart';
                }
            }

            return
        }
        console.log("WON!");
        playerScore= `${parseInt(playerScore)+ 1}`;
        curscore.textContent = `${playerScore}-${computerScore}`;

        return
    }
    else if (playerSelection == "SCISSORS"){
        if (computerSelection == "ROCK"){
            console.log("LOST!");
            computerScore= `${parseInt(computerScore)+ 1}`;
            curscore.textContent = `${playerScore}-${computerScore}`;
            
            return
        }
        console.log("WON!");
        playerScore= `${parseInt(playerScore)+ 1}`;
        curscore.textContent = `${playerScore}-${computerScore}`;
        return
    }



}
const reset = document.querySelector("#play-again")
reset.addEventListener('click', () =>{
    let curscore = document.querySelector("#cur-score");
    curscore.textContent = "0-0"

})
const rock_btn = document.querySelector("button#rock");
rock_btn.addEventListener('click', function(e){
    let computerSelection = getComputerChoice();
    let curscore = document.querySelector("#cur-score");
    let cur = curscore.textContent;
    let playerScore = cur.charAt(0)
    let computerScore = cur.charAt(2)
    let msg = document.querySelector('#msg')
    if (parseInt(playerScore) != 5 && parseInt(computerScore) != 5){
        playRound("rock");
    }



});
const paper_btn = document.querySelector("button#paper");
paper_btn.addEventListener('click', function(e){
    let computerSelection = getComputerChoice();
    let curscore = document.querySelector("#cur-score");
    let cur = curscore.textContent;
    let playerScore = cur.charAt(0)
    let computerScore = cur.charAt(2)
    let msg = document.querySelector('#msg')
    if (parseInt(playerScore) != 5 && parseInt(computerScore) != 5){
        playRound("paper");
    }


});
const scissors_btn = document.querySelector("button#scissors");
scissors_btn.addEventListener('click', function(e){
    let computerSelection = getComputerChoice();
    let curscore = document.querySelector("#cur-score");
    let cur = curscore.textContent;
    let playerScore = cur.charAt(0)
    let computerScore = cur.charAt(2)
    let msg = document.querySelector('#msg')
    if (parseInt(playerScore) != 5 && parseInt(computerScore) != 5){
        playRound("scissors");
    }


});
