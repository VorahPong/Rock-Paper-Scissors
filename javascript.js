

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

/*

*/
function playGame(){
    /* 
        Score variables
    */
    let humanScore = 0
    let computerScore = 0

    /*
        This function take human and computer choices as argument, play a single round, and log the winner
    */
    const result = document.querySelector('#result');
    function playRound(humanChoice, computerChoice){
        // 9 possible outcome, but draw take 3 out which left 6 conditions
        if(humanChoice === computerChoice){
            result.textContent = 'Round: Tie!';
        }
        else if(humanChoice === 'rock' && computerChoice === 'scissor'){
            result.textContent = 'Round: Human win!';
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock'){
            result.textContent = 'Round: human win!';
            humanScore++;
        }
        else if(humanChoice === 'scissor' && computerChoice === 'paper'){
            result.textContent = 'Round: human win!';
            humanScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper'){
            result.textContent = 'Round: computer win!';
            computerScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'scissor'){
            result.textContent = 'Round: computer win!';
            computerScore++;
        }
        else if(humanChoice === 'scissor' && computerChoice === 'rock'){
            result.textContent = 'Round: computer win!';
            computerScore++;
        }
        else{
            throw new Error('ERROR UNKNOWN OUTCOME')
        }
    }

    const selectChoice = document.querySelectorAll('button');

    selectChoice.forEach((button) => {
        button.addEventListener('click', function (){
            switch (button.id) {
                case 'rock':
                    console.log('rock has been selected');
                    playRound('rock', getComputerChoice());
                    break;
                case 'paper':
                    console.log('paper has been selected');
                    playRound('paper', getComputerChoice());
                    break;
                case 'scissor':
                    console.log('scissor has been selected');
                    playRound('scissor', getComputerChoice());
                    break;
                default:
            }
            const score = document.querySelector('#score');
            score.textContent = `HUMAN: ${humanScore} COMPUTER: ${computerScore}`;
            
            if(humanScore >= 5){
                result.textContent = 'GAME: HUMAN WON THE GAME!';
                humanScore = 0;
                computerScore = 0;
            }
            else if(computerScore >= 5){
                result.textContent = 'GAME: COMPUTER WON THE GAME!';
                humanScore = 0;
                computerScore = 0;
            }
        });
    });   
}

playGame();


