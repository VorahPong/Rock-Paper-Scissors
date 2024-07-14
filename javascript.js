
/*
    This function generate a random value of "rock" "paper" or "scissor".
*/
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3) //Generate between number 0-2
    if(rand === 0){
        return "rock"
    }
    else if(rand === 1){
        return "paper"
    }
    else {
        return "scissor"
    }
}

/*
    This function get a valid choice from the user for "rock" "paper" or "scissor".
*/
function getHumanChoice(){
    let choice = prompt('Enter your choice: rock, paper, or scissor')
    choice = choice.toLowerCase();


    while((choice === 'rock' || choice === 'paper' || choice === 'scissor') === false){
        choice = prompt('Invalid choice. Enter your choice: rock, paper, or scissor')
        choice = choice.toLocaleLowerCase();
    }
    return choice
}
