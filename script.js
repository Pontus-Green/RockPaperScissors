const weaponss = ["rock", "paper", "scissors"];

function computerPlay(weapons = weaponss){
    return weapons[Math.floor(Math.random()*3)];
}

function playerPlay(weapons = weaponss){
    let playerChoice = prompt("Choose your weapon, rock, paper or scissors!");
    if(playerChoice == null){
        alert("You chose nothing");
        return;
    }
    else if (!weapons.includes(playerChoice.toLowerCase())){
        alert("You chose an illegal weapon!");
        return;
    } else {
        return playerChoice;
    }
}

function playRound(playerChoice, computerChoice){
    //Logic handling
    if(playerChoice){
        if(playerChoice == "rock" && computerChoice =="paper"){
            console.log("Computer wins!!");
            return "loss";
        }
        else if(playerChoice == "rock" && computerChoice =="scissors"){
            console.log("You win!");
            return "win";
        }
        else if(playerChoice =="paper" && computerChoice == "rock"){
            console.log("You win!");
            return "win";
        }
        else if(playerChoice =="scissors" && computerChoice == "rock"){
            console.log("Computer wins!!");
            return "loss";
        } else if(playerChoice == "paper" && computerChoice =="scissors"){
            console.log("Computer wins!!");
            return "loss";
        } else if(playerChoice =="scissors" && computerChoice == "paper"){
            console.log("You win!");
            return "win";
        } else{
            console.log("It's a draw..");
            return;
        }
    } else{
        console.log("Game was not played!");
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        //player chooses
        let playerChoice = playerPlay();
        
        //computer chooses
        let computerChoice = computerPlay();
        

        //printing out the chosen weapons
        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        let outcome = playRound(playerChoice, computerChoice);
        if(outcome == "win"){
            playerWins++;
        } else if(outcome =="loss"){
            computerWins++;
        }

        //score
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);

    }
}

game();