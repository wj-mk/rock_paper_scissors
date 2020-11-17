let playerSelection = '';
let roundNumber, playerScore, computerScore;
roundNumber = playerScore = computerScore = 0;

const results = document.querySelector('#results');

const rounds = document.createElement('p');

const roundResult = document.createElement('p');

const scores = document.createElement('p');

function computerChoose(){
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

    return choice;
};

function playRound(playerSelection) {
    computerSelection = computerChoose();
    if (computerSelection == playerSelection) {
        return `Tie! ${computerSelection} and ${playerSelection}.`;
    }
    else if (
            (computerSelection == 'rock' && playerSelection == 'paper') || 
            (computerSelection == 'paper' && playerSelection == 'scissors') || 
            (computerSelection == 'scissors' && playerSelection == 'rock')
            ) 
            {
                playerScore += 1;
                return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
    };
};

// listen for button press from user
buttons.addEventListener('click', function(e) {
    playerSelection = e.target.id;
    roundOutcome = playRound(playerSelection);
    ++roundNumber;
    console.log(`Completed ${roundNumber} of 5 rounds.`)
    
    rounds.textContent = `Completed ${roundNumber} of 5.`;
    results.appendChild(rounds);
    
    roundResult.textContent = roundOutcome;
    results.appendChild(roundResult);

    scores.textContent = `Player's Score: ${playerScore}. Computer's Score: ${computerScore}.`;
    results.appendChild(scores);

    console.log(playerScore, computerScore);
    if (roundNumber > 4) {
        if (playerScore > computerScore) {
            console.log("You have won the game!")
        }
        else {
            console.log("You have lost the game! ")
        }
        roundNumber = playerScore = computerScore = 0;
    }
})

