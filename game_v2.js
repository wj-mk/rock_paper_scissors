let pScore, cScore;
pScore = cScore = 0;
let inResult = ''
roundNumber = 0;

const results = document.querySelector('#results')

const rounds = document.createElement('p');
results.appendChild(rounds);
rounds.textContent = `Round ${roundNumber} of 5.`;

/*const outResult = document.createElement('p');
results.appendChild(outResult);

/*const scores = document.createElement('p');
results.appendChild(scores);
scores.textContent = `Player's Score: ${pScore}. Computer's Score: ${cScore}.`;*/

// function computerPlay randomly returns rock, paper or scissors
function computerPlay(){
    randomNumber = Math.random()
    if (randomNumber < 0.333) {
        choice = 'rock';
    }
    else if (randomNumber > 0.333 &&  randomNumber < 0.667) {
        choice = 'paper';
    }
    else if (randomNumber > 0.667) {
        choice = 'scissors';
    }
    return choice
}

// function playRound that plays a round of rock, paper, scissors
// returns if player wins or looses
function playRound(computerPlay, playerSelection) {
    switch (computerPlay) {
        case 'rock':
            switch (playerSelection) {
                case 'rock':
                    result = "Tie. Rock v Rock.";
                    break;
                case 'paper':
                    result = "You win! Paper crushes Rock.";
                    break;
                case 'scissors':
                    result = "You lose! Rock blunts Scissors.";
                    break;
            }
            break;
        case 'paper':
            switch (playerSelection) {
                    case 'rock':
                        result = "You lose! Paper crushes Rock.";
                        break;
                    case 'paper':
                        result = "Tie. Paper v Paper.";
                        break;
                    case 'scissors':
                        result = "You win! Scissors cuts Paper.";
                        break;
                }
            break;
        case 'scissors':
            switch (playerSelection) {
                    case 'rock':
                        result = "You win! Rock blunts Scissors.";
                        break;
                    case 'paper':
                        result = "You lose! Scissors cuts Paper.";
                        break;
                    case 'scissors':
                        result = "Tie. Scissor v Scissors.";
                        break;
                }
            break;
    }
    return result
}



// listen for button press from user
buttons.addEventListener('click', function (e) {
    pSelect = e.target.id;
    cSelect = computerPlay();
    roundResult = playRound(cSelect, pSelect);
    console.log(roundResult);
    ++roundNumber;
    rounds.textContent = `Round ${roundNumber} of 5.`;
    if (roundNumber > 5) {
        roundNumber = 1;
        rounds.textContent = `Round ${roundNumber} of 5.`;
    }
})










// function game() that plays 5 rounds, and keeps the score and reports the winner or loser at the end.

function game() {
    playerScore = 0;
    computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let player =  playerSelection();
        let computer = computerPlay();
        round = playRound(computer, player);

        
    }

    if (playerScore == 5) {
        console.log("You have won the game!")
    }
    else if (computerScore == 5) {
        console.log("You have lost the game!")
    }   
}


