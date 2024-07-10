'use strict';


function randomNumber(){
  return  Math.trunc(Math.random()*20 +1);
}

function displayMessage(message){
    document.querySelector('.message').textContent = message;
};

function displaScore(score){
    document.querySelector('.score').textContent = score; 
};


 /* always make sure that all the data, relevant for our application 
        is available in our code and not just in dom */
let highscore = 0;
let score = 20;
let secretNumber= randomNumber();

let number = document.querySelector('.number');
let body = document.querySelector('body');
   

document.querySelector('.check').addEventListener('click', function(){
    
    const guess = Number(document.querySelector('.guess').value);
    
    //When ther is no input
    if(!guess) {
        displayMessage('No Number');
    } 
    // When number is too high or too low
    else if (secretNumber !== guess){
        if(score>1){
            displayMessage( guess > secretNumber? 'Too high' : 'too low'); 
            score --;
            displaScore(score);
        } else {
            displayMessage('You lost'); 
            displaScore('0');
        }
    } 
    //when guess number is correct
    else if (secretNumber === guess){
        displayMessage('correct number');
        number.textContent = secretNumber;
        body.style.backgroundColor = 'green';
        number.style.width = '30rem'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = randomNumber();
    number.textContent = '?';
    number.style.width = '15rem';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    score = 20;
    displaScore(score);
    body.style.backgroundColor ='#222';
});
