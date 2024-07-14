
/*
    This function generate a random value of "rock" "paper" or "scissors".
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