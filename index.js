const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const winnerInfo = document.getElementById("winner")
const userScore = document.getElementById("user-score")
const compScore = document.getElementById("comp-score")

let yourScore = 0
let computerScore = 0

rockBtn.addEventListener("click", function(){
    let compCh = compChoice()
    if(compCh == "rock"){
        winnerInfo.innerText = "It's a Tie!"
    }else if(compCh == "scissors"){
        winnerInfo.innerText = `You win! rock beats ${compCh}`
        yourScore++
        userScore.textContent = yourScore
    }else{
        winnerInfo.innerText = `You lose! ${compCh} beats rock`
        computerScore++
        compScore.textContent = computerScore
    }
})
paperBtn.addEventListener("click", function(){
    let compCh = compChoice()
    if(compCh == "rock"){
        winnerInfo.innerText = `You win! paper beats ${compCh}`
        yourScore++
        userScore.textContent = yourScore
    }else if(compCh == "paper"){
        winnerInfo.innerText = `It'a Tie!`
    }else{
        winnerInfo.innerText = `You lose! ${compCh} beats paper`
        computerScore++
        compScore.textContent = computerScore
    }
})
scissorsBtn.addEventListener("click", function(){
    let compCh = compChoice()
    if(compCh == "rock"){
        winnerInfo.innerText = `You lose! ${compCh} beats scissors`
        computerScore++
        compScore.textContent = computerScore
    }else if(compCh == "paper"){
        winnerInfo.innerText = `You win! scissors beat ${compCh}`
        yourScore++
        userScore.textContent = yourScore
    }else{
        winnerInfo.innerText = `It's a Tie!`
    }
})

function compChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1
    if(computerChoice == 1){
        return "rock"
    }else if(computerChoice == 2){
        return "paper"
    }else if(computerChoice == 3){
        return "scissors"
    }
}