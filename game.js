const player1 = document.getElementById("name--0");
const player2 = document.getElementById("name--1");

const currentplyr1 = document.getElementById("current--0");
const currentplyr2 = document.getElementById("current--1");

let playerScore1 = document.getElementById("score--0");
let playerScore2 = document.getElementById("score--1");

const dice = document.querySelector(".dice");

const diceBtn = document.querySelector(".btn--roll");

const player1Active = document.querySelector(".player--0");
const player2Active = document.querySelector(".player--1");

const scoreHold = document.querySelector(".btn--hold");

const resetBtn = document.querySelector(".btn--new");

playerScore1.textContent = 0;
playerScore2.textContent = 0;

let scores, activePlayer, currentScore, player;
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  player = true;
  playerScore1.textContent = 0;
  playerScore2.textContent = 0;
  currentplyr1.textContent = 0;
  currentplyr2.textContent = 0;
  dice.classList.add("hidden");
  player1Active.classList.remove("player--winner");
  player2Active.classList.remove("player--winner");
  player1Active.classList.add("player--active");
  player2Active.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // currentplyr2.textContent = 0;
  // currentplyr1.textContent = 0;
  player1Active.classList.toggle("player--active");
  player2Active.classList.toggle("player--active");
};

diceBtn.addEventListener("click", function () {
  //console.log("keypresses");
  if (player) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove("hidden");
    dice.src = `dice-${diceRoll}.png `;

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // currentplyr1.textContent = currentScore;
    // console.log(currentScore);
    else {
      switchPlayer();
    }
  }
});

scoreHold.addEventListener("click", function () {
  if (player) {
    scores[activePlayer] += currentScore;
    // scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      player = false;
      dice.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

resetBtn.addEventListener("click", init);
