const h1 =  document.querySelector("h1");
const newGameBtn = document.querySelector('.new_game');

function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}
function init(){

}
function play(){
    const player1=randomNumber();
    const player2=randomNumber();

    const randomDice1="images/dice"+player1+".png";
    const randomDice2="images/dice"+player2+".png";
    document.querySelector(".img1").setAttribute("src", randomDice1);
    document.querySelector(".img2").setAttribute("src", randomDice2);


    if (player1 > player2){
    h1.textContent="Player 1 wins 🚩";
    }
    else if (player2 > player1){
        h1.textContent="Player 2 wins 🚩";
    }
    else {
        h1.textContent="DRAW 🚩";
    }

    newGameBtn.textContent = 'New Game';
}


newGameBtn.addEventListener('click', play);