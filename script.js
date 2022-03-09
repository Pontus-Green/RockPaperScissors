//Global variables
const weaponss = ["rock", "paper", "scissors"];
const WINNINGSCORE = 5;
let playerScore = 0;
let computerScore = 0;
let PLAYING = true;
let resetExecution = false;

// UI update queries
const playerScoreUI = document.getElementById("playerScore");
const computerScoreUI = document.getElementById("computerScore");
const resultUItext = document.getElementById("resultText");
const resultUI = document.querySelector("div.result");
const buttons = document.querySelectorAll("div.buttons > button");
// Reset button queries
const resetDiv = document.createElement('div');
const resetButton = document.createElement('button');


function computerPlay(weapons = weaponss){
    //weapon choice
    let chosenWeapon = weapons[Math.floor(Math.random()*3)];

    //update picture in html
    let image = document.getElementById("computerWeapon");
    image.src = `./images/${chosenWeapon}.png`;
    
    return chosenWeapon;
}

function playRound(playerChoice, computerChoice){
    //Logic handling
    if(PLAYING){
        if(playerChoice == "rock" && computerChoice =="paper"){
            return "loss";
        }
        else if(playerChoice == "rock" && computerChoice =="scissors"){
            return "win";
        }
        else if(playerChoice =="paper" && computerChoice == "rock"){
            return "win";
        }
        else if(playerChoice =="scissors" && computerChoice == "rock"){
            return "loss";
        } else if(playerChoice == "paper" && computerChoice =="scissors"){
            return "loss";
        } else if(playerChoice =="scissors" && computerChoice == "paper"){
            return "win";
        } else{
            return "draw";
        }
    }
}

function addScore(result){
    if(result == "loss"){
        computerScore += 1;
    } else if(result == "win"){
        playerScore +=1;
    }
}

function updateResults(result){
    playerScoreUI.textContent = `Player score: ${playerScore}`;
    computerScoreUI.textContent = `Computer score: ${computerScore}`;
    switch (result){
        case 'win':
            resultUItext.textContent = "You won!!";
            resultUI.style.backgroundColor ="Green";
            break;
        case 'loss':
            resultUItext.textContent = "You lost!!";
            resultUI.style.backgroundColor = "Red";
            break;
        case 'draw':
            resultUItext.textContent = "It's a draw..";
            resultUI.style.backgroundColor = "yellow";
            break;
    }
}

let resetDivCreation = (function resetDivCreation(result){
    return function(result){
        if(!resetExecution) {
            switch(result){
                case 'win':
                    resetDiv.textContent = "Wow you are such a winner, play again?";
                    break;
                case 'loss':
                    resetDiv.textContent = "whoawee you are such a loser, play again?";
                    break;
            }
            resetButton.textContent ="Reset Game";
            resetDiv.classList.add("resetStyle");
            resetButton.classList.add("weapon-button");

        resetDiv.appendChild(resetButton);
        document.body.appendChild(resetDiv);
        resetExecution = true;
        }
    };
})();

buttons.forEach((button) => {
    //for each button we add a listener
        button.addEventListener('click', () => {
            // Check if game is over
            if (playerScore == 5 || computerScore ==5){
                PLAYING = false;
            }
            // Play a round
            if(PLAYING){
                playerChoice = button.id;
                let image = document.getElementById("playerWeapon");
                image.src=`./images/${button.id}.png`;

                let result = playRound(playerChoice,computerPlay());
                addScore(result);
                updateResults(result);

                //Game finished
                if ((result == "win" && playerScore == 5) || (result == "loss" && computerScore == 5)){
                    resetDivCreation(result);
                }
            }
        });
});

resetButton.addEventListener('click', () => {
    document.body.removeChild(resetDiv);
    playerScore = 0;
    computerScore = 0;
    PLAYING = true;
    resetExecution = false;
    resultUItext.textContent = "Go";
    resultUI.style.backgroundColor = "white";
    updateResults();
});
