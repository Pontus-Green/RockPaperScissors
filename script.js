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
            return;
        }
        else if(playerChoice == "rock" && computerChoice =="scissors"){
            console.log("You win!");
            return;
        }
        else if(playerChoice =="paper" && computerChoice == "rock"){
            console.log("You win!");
            return;
        }
        else if(playerChoice =="scissors" && computerChoice == "rock"){
            console.log("Computer wins!!");
            return;
        } else if(playerChoice == "paper" && computerChoice =="scissors"){
            console.log("Computer wins!!");
            return;
        } else if(playerChoice =="scissors" && computerChoice == "paper"){
            console.log("You win!");
            return;
        } else{
            console.log("It's a draw..");
            return;
        }
    } else{
        console.log("Game was not played!");
    }
}


for(let i = 0; i < 5; i++){
    //player chooses
    let playerChoice = playerPlay();
    //computer chooses
    let computerChoice = computerPlay();

    //printing out the chosen weapons
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    playRound(playerChoice, computerChoice);
}