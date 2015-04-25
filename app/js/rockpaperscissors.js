////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    /// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    var p= 'player';
    var c= 'computer';
    var t= 'its a tie';
    
    switch (playerMove) {
    case 'rock':
        if (computerMove === 'scissors') {
            console.log('player wins');
            winner= p;
        } else if (computerMove === 'paper') {
            console.log('computer wins');
            winner= c;
        } else if (computerMove === 'rock') {
            console.log('it is a tie');
            winner= t;
        } else {return 'error';
            
        }
        break;
    case 'scissors': 
        if (computerMove === 'paper') {
        console.log('player wins');
        winner= p;
        } else if (computerMove === 'rock') {
            console.log('computer wins');
            winner= c;
        } else if (computerMove === 'scissors') {
            console.log('it is a tie');
            winner= t;
        } else {return 'error';
            
        }
        break;
    case 'paper':
        if (computerMove === 'rock') {
           console.log('player wins');
           winner= p;
        } else if (computerMove === 'scissors') {
            console.log('computer wins');
            winner= c;
        } else if (computerMove === 'paper') {
            console.log('it is a tie');
            winner= t;
        } else {return 'error';
            
        }
    
}

return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    while (playerWins < 5 && computerWins < 5) {
    
  var playerMove = getPlayerMove();
  var computerMove = getComputerMove();
  var winner = getWinner(playerMove, computerMove);
    
    if (winner === 'player'){
        playerWins += 1;    
    } else if (winner === 'computer') {
        computerWins += 1;
    } 
console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
}

    
    return [playerWins, computerWins];
}



