let userScore = 0;
let compScore = 0;

const userScorepara = document.querySelector("#user-score");
const comprScorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const gameDraw = () => {
  msg.innerHTML = "Game was draw";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorepara.innerHTML = userScore;
    msg.innerHTML = `you win! your ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    comprScorepara.innerHTML = compScore;
    msg.innerHTML = `you lose! ${compChoice} beats your ${userChoice}`;
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  //generate comp choice -> modular
  const compChoice = genCompChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    gameDraw();
    //draw game
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //scissor or paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock or sciddor
      userwin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      //rock or paper
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
