let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const arrOfSelection = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*3);
    const compChoices = arrOfSelection[randomNum];
    return compChoices;
}

const playRound = (playerSelection, computerSelection) => {
    //Both Selections are Equal
    if(playerSelection === 'rock' && computerSelection == 'rock'){
        return 'You Tied! You both picked Rock';
    }else if(playerSelection === 'scissors' && computerSelection == 'scissors'){
        return 'You Tied! You both picked Scissors';
    }else if(playerSelection === 'paper' && computerSelection == 'paper'){
        return 'You Tied! You both picked Paper';
    }else if(playerSelection === 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return 'You Lost! Rock crushes Scissors';
    }else if(playerSelection === 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return 'You Won! Scissors cuts Paper';
    }else if(playerSelection === 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'You Lost! Paper covers Rock';
    }else if(playerSelection === 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return 'You Won! Rock crushes Scissors';
    }else if(playerSelection === 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return 'You Lost! Scissors cuts Paper';
    }else if(playerSelection === 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'You Won! Paper covers rock';
    }
}


const game = () => {
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Choose what to throw", "Rock, Paper, Scissors").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    if(playerScore > computerScore){
        return "You beat the Computer";
    } else if(computerScore > playerScore) {
        return 'Oh No! Computer beat you';
    } else {
        return 'You Tied with computer!';
    }
}

console.log(game());
