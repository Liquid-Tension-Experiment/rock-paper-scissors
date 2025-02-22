const buttons = document.querySelector(".bottom-row");
const humanScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const gameText = document.querySelector(".game-info");

buttons.addEventListener('click', (e) => {

    const target = e.target;
    console.log(e.target);

    if (target.className =="rock-btn"){
        playRound('rock', getComputerChoice());
    }else if (target.className =="paper-btn"){
        playRound('paper', getComputerChoice());
    } else if (target.className =="scissors-btn"){
        playRound('scissors', getComputerChoice());
    }
});

let humanScore = 0;
let computerScore = 0;
let isGameOver = false;


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore > computerScore){
        console.log('You win!')
    }else if (humanScore == computerScore){
        console.log("After 5 rounds, it's a tie!!")
    }else {
        console.log('Oh, man! You lost!')
    }
    
}
function playRound(humanChoice, computerChoice){

    if(isGameOver){
        return;
    }
    if (humanChoice=='rock'){
        if (computerChoice=='rock'){
            gameText.textContent = "It's a tie!";
        }
        if (computerChoice=='paper'){
            gameText.textContent ="You lose! Paper beats Rock!";
            computerScore += 1;
            computerScoreText.textContent = `Computer: ${computerScore}`;
        }
        if (computerChoice=='scissors'){
            gameText.textContent ="You win! Rock beats scissors!";
            humanScore += 1;
            humanScoreText.textContent = `Player: ${humanScore}`;
        }
    }
    else if (humanChoice=='paper'){
        if (computerChoice=='rock'){
            gameText.textContent ="You win! Paper beats Rock!";
            humanScore += 1;
            humanScoreText.textContent = `Player: ${humanScore}`;
        }
        if (computerChoice=='paper'){
            gameText.textContent = "It's a tie!";

        }
        if (computerChoice=='scissors'){
            computerScore += 1;
            computerScoreText.textContent = `Computer: ${computerScore}`;
        }
    }
    else if (humanChoice=='scissors'){
        if (computerChoice=='rock'){
            computerScore += 1;
            computerScoreText.textContent = `Computer: ${computerScore}`;
        }
        if (computerChoice=='paper'){
            gameText.textContent = "You win! Scissors beats Paper!";
            humanScore += 1;
            humanScoreText.textContent = `Player: ${humanScore}`;

        }
        if (computerChoice=='scissors'){
            gameText.textContent = "It's a tie!";
        }
    }
    isGameOver = checkIfGameOver(humanScore, computerScore);
}

function checkIfGameOver(humanScore, computerScore){
    if (humanScore >= 5 || computerScore >= 5){
        return true;
    }
    else{
        return false;
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