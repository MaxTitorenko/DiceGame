let player1Wins = document.getElementById("player1Wins"),
    player1Score = document.getElementById("player1Score"),
    player1Dice = document.getElementById("player1Dice"),
    dice1 = document.getElementById("dice1"),
    name1 = document.getElementById("name1"),
    player1Name = ""

let player2Wins = document.getElementById("player2Wins"),
    player2Score = document.getElementById("player2Score"),
    player2Dice = document.getElementById("player2Dice"),
    dice2 = document.getElementById("dice2"),
    name2 = document.getElementById("name2")
    player2Name = ""

let player1Move = true,
    player1ScoreCount = 0,
    player2ScoreCount = 0,
    player1WinCount = 0,
    player2WinCount = 0,
    totalWinsNeeded = 1

const rollBtn = document.getElementById("rollBtn"),
      resetBtn = document.getElementById("resetBtn"),
      startBtn = document.getElementById("startGameBtn"),
      anouncer = document.getElementById("anouncer"),
      startModal = document.getElementById("startModal"),
      winModal = document.getElementById("winModal"),
      winner = document.getElementById("winner")


function switchActive(){
    if(dice1.classList.contains("active")){
        dice1.classList.remove("active")
        dice2.classList.add("active")
    }else{
        dice2.classList.remove("active")
        dice1.classList.add("active")
    }
}

startBtn.addEventListener("click", function(event){
    event.preventDefault()
    player1Name = document.getElementById("player1Nickname").value
    player2Name = document.getElementById("player2Nickname").value
    totalWinsNeeded = document.getElementById("totalWins").value
    console.log(player1Name)
    console.log(player2Name)
    console.log(totalWinsNeeded)
    startModal.style.display = "none"
    name1.textContent = player1Name
    name2.textContent = player2Name
    anouncer.textContent = `${player1Name}'s move`
})

rollBtn.addEventListener("click", function(){

    let randomNumber = Math.floor(Math.random() * 6) + 1

    if(player1Move == true){
        player1Dice.textContent = randomNumber
        player1Move = false
        switchActive()
        player1ScoreCount += randomNumber
        player1Score.textContent = player1ScoreCount
        anouncer.textContent = `${player2Name}'s move`
    }else{
        player2Dice.textContent = randomNumber
        player1Move = true
        switchActive()
        player2ScoreCount += randomNumber
        player2Score.textContent = player2ScoreCount
        anouncer.textContent = `${player1Name}'s move`
    }

    if(player1ScoreCount >= 20 || player2ScoreCount >=20){
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"

        resetBtn.addEventListener("click", function(){
            player1Move = true
            player1ScoreCount = 0
            player2ScoreCount = 0
            player1Score.textContent = player1ScoreCount
            player2Score.textContent = player2ScoreCount
            player1Dice.textContent = "-"
            player2Dice.textContent = "-"
            dice2.classList.remove("active")
            dice1.classList.add("active")
            rollBtn.style.display = "block"
            resetBtn.style.display = "none"
            anouncer.textContent = `${player1Name}'s move`
        })
    }

    if(player1ScoreCount >= 20){
        anouncer.textContent = `${player1Name} Won!`
        player1WinCount += 1
        player1Wins.textContent = player1WinCount
    }else if(player2ScoreCount >= 20){
        anouncer.textContent = `${player2Name} Won!`
        player2WinCount += 1
        player2Wins.textContent = player2WinCount
    }

    if(player1WinCount == totalWinsNeeded){
        winModal.style.display = "block"
        winner.textContent = player1Name
    }else if(player2WinCount == totalWinsNeeded){
        winModal.style.display = "block"
        winner.textContent = player2Name
    }
})