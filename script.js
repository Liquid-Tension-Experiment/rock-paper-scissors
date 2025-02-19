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