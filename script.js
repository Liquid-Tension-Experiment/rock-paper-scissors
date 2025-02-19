
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score:\nPlayer: ${humanScore}   Computer: ${computerScore}`);
    }

    if (humanScore > computerScore){
        console.log('You win!')
    }else if (humanScore == computerScore){
        console.log("After 5 rounds, it's a tie!!")
    }else {
        console.log('Oh, man! You lost!')
    }
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice=='rock'){
            if (computerChoice=='rock'){
                console.log("It's a tie!")
            }
            if (computerChoice=='paper'){
                console.log("You lose! Paper beats Rock!")
                computerScore += 1;
            }
            if (computerChoice=='scissors'){
                console.log("You win! Rock beats scissors!")
                humanScore += 1;
            }
        }
        else if (humanChoice=='paper'){
            if (computerChoice=='rock'){
                console.log("You win! Paper beats Rock!")
                humanScore += 1;
            }
            if (computerChoice=='paper'){
                console.log("It's a tie!")
    
            }
            if (computerChoice=='scissors'){
                console.log("You lose! Scissors beats Paper!")
                computerScore += 1;
            }
        }
        else if (humanChoice=='scissors'){
            if (computerChoice=='rock'){
                console.log("You lose! Rock beats Scissors!")
                computerScore += 1;
            }
            if (computerChoice=='paper'){
                console.log("You win! Scissors beats Paper!")
                humanScore += 1;
    
            }
            if (computerChoice=='scissors'){
                console.log("It's a tie!")
            }
        }
    }
}

function getComputerChoice() {
    
    let choice = Math.floor((Math.random()*3));

    if (choice==0){
        return "rock";
    }else if(choice==1){
        return "paper";
    }else if (choice==2){
        return "scissors";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper, or Scissors?");

    if (userChoice.toLowerCase()=="rock"){
        return "rock";
    }else if (userChoice.toLowerCase()=="paper"){
        return "paper";
    }else if (userChoice.toLowerCase()=="scissors"){
        return "scissors";
    } else {
        alert('Invalid choice. Choosing default: rock');
        return "rock";
    }
}