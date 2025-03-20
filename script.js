let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerHTML = "It's a Draw"
    msg.style.backgroundColor = "#081b31";
}
const compChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const ranIDX = Math.floor(Math.random()*3);
    return options[ranIDX];
}

const showWin = (userWin, userChoice, compChoice) => { 
    if (userWin) {
        userScore++
        userScorePara.innerHTML = userScore
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++
        compScorePara.innerHTML = compScore
        msg.innerHTML = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => { 
    const gencompchoice = compChoice(); 

    if (userChoice == gencompchoice) {
        drawGame();
    } else {
        let userWin = "true"; 
        if (userChoice === "rock") {
            userWin = gencompchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = gencompchoice === "scissor" ? false : true; 
        } else {
            userWin = gencompchoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, gencompchoice); 
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    })
})

