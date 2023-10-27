/*
The Rock-Paper-Scissors game is going to work as follows:
I'm going to generate a random number between 1 and 3, each number corresponds to a choice.
  1: Rock
  2: Paper
  3: Scissors
*/

// A function to generate the random number.
function getComputerChoice() {
    let ramNum = parseInt(Math.random()*(4-1)+1);
    return ramNum;
}

// A function to evaluate the computer choice with the player selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === 1) {
            return "It's a tie"
        } else if (computerSelection === 2) {
            return "You lose! Paper beats Rock";
        } else if (computerSelection === 3) {
            return "You win! Rock beats Scissors";
        };
    } else if (playerSelection === "paper") {
        if (computerSelection === 1) {
            return "You win! Paper beats Rock"
        } else if (computerSelection === 2) {
            return "It's a tie";
        } else if (computerSelection === 3) {
            return "You lose! Scissors beat Paper";
        };
    } else if (playerSelection === "scissors") {
        if (computerSelection === 1) {
            return "You lose! Rock beats Scissors"
        } else if (computerSelection === 2) {
            return "You win! Scissors beat Paper";
        } else if (computerSelection === 3) {
            return "It's a tie";
        };
    };
}

// A function to execute 5 games and evaluate the winner.
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    for (let i=0; i<5; i++) {
        let ps = prompt("Enter your choice: ").toLowerCase();
        if (ps === "rock" || ps === "paper" || ps === "scissors") {
            let result = playRound(ps, getComputerChoice());
            console.log(result);
            if (result.includes("You win")) {
                playerWins += 1;
            } else if (result.includes("You lose")) {
                computerWins += 1;
            } else if (result.includes("tie")) {
                ties += 1;
            };
        } else {
            console.log("You input a wrong value, make sure to type: rock, paper or scissors");
            --i;
            continue;
        };
        
    };

    // Printing the results
    console.log("*".repeat(20));
    console.log("You:", playerWins);
    console.log("Computer:", computerWins);
    console.log("Ties:", ties);

    // Evaluating the results
    console.log("*".repeat(20));
    if (playerWins > computerWins) {
        console.log("You win!");
        return "You win!";
    } else if (playerWins === computerWins) {
        console.log("It's a tie!");
        return "It's a tie!";
    } else {
        console.log("You lose!");
        return "You lose!";
    };
}

game();