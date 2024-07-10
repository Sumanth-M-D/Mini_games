"use strict";

// //selecting elements
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// const player0EL = document.querySelector('.player--0');
// const player1EL = document.querySelector('.player--1');

// let currentScore = 0;
// let score = 0;

// const player1 ={
//     setScore(score){
//         score0El.textContent = score;
//     },
//     setCurrentscore(currentScore){
//         current0El.textContent = currentScore;
//     },
//     toggleActivePlayerClass(){
//         player0EL.classList.toggle('player--active');
//     }
// }

// const player2 = {
//     setScore(score){
//         score1El.textContent = score;
//     },
//     setCurrentscore(currentScore){
//         current1El.textContent = currentScore;
//     },
//     toggleActivePlayerClass(){
//         player1EL.classList.toggle('player--active');
//     }
// }

// let currentPlayer = player1;

// function switchPlayer() {
//     currentPlayer.toggleActivePlayerClass();
//     currentPlayer = currentPlayer === player1 ? player2 : player1;
//     currentPlayer.toggleActivePlayerClass();
// }

// //starting conditions
// diceEl.classList.add('hidden');
// score0El.textContent = 0;
// score1El.textContent = 0;

// // rolling the dice
// btnRoll.addEventListener('click', function(event){
//     //1. generate random dice roll
//     const dice = Math.floor(Math.random()*6 + 1);
//     console.log(dice);

//     //2. Display the dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     //3. check for rolled 1 ? 'switch player' : 'continue'
//     if(dice !== 1){
//         currentScore += dice;
//         currentPlayer['setCurrentscore'](currentScore);
//     } else {
//         currentScore = 0;
//         currentPlayer['setCurrentscore'](currentScore);
//         switchPlayer();
//     }
// });

// btnHold.addEventListener('click', function(){
//     score += currentScore;
//     currentPlayer.setScore(score);
//     currentScore = 0;
//     currentPlayer['setCurrentscore'](currentScore);
//     switchPlayer();
// });

//solution 2

//selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

let currentScore, activePlayer, scores, playing;

function setCurrentScore(activePlayer, currentScore) {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
}

function setScore(activePlayer, score) {
  document.querySelector(`#score--${activePlayer}`).textContent = score;
}

function toggleActivePlayerClass(activePlayer) {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");
}

function switchPlayer(activePlayer) {
  currentScore = 0;
  setCurrentScore(activePlayer, currentScore);
  toggleActivePlayerClass(activePlayer);
  activePlayer = activePlayer === 0 ? 1 : 0;
  toggleActivePlayerClass(activePlayer);
  return activePlayer;
}

//starting conditions
function init() {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
}
init();

// rolling the dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate random dice roll
    const dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);

    //2. Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. check for rolled 1 ? 'switch player' : 'continue'
    if (dice !== 1) {
      currentScore += dice;
      setCurrentScore(activePlayer, currentScore);
    } else {
      activePlayer = switchPlayer(activePlayer);
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    setScore(activePlayer, scores[activePlayer]);

    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      activePlayer = switchPlayer(activePlayer);
    }
  }
});

btnNew.addEventListener("click", function () {
  setCurrentScore(activePlayer, 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
  init();
});
