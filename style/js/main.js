
let current=0;
let playerID=1;
let score1=0
let score2=0
let isFinished=false;

const startBtn= document.querySelector('[data-start]');
const diceImg= document.querySelector('.dice-img');
const saveGame=document.querySelector('.btn--hold');
const newGame=document.querySelector('.btn--new');
const winnerText1=document.getElementById('winnerText1');
const winnerText2=document.getElementById('winnerText2');

// To show dice image 
function showDice(id){
    diceImg.innerHTML='<image src="image/'+id+'.png" class="dice" alt="dice 1"/>';
}

// Find Winner
function findWinner(score,id){
    if(score>=10){
        document.getElementById('player'+id).classList.remove('active');
        document.getElementById('player'+id).classList.add('winner');
        document.getElementById('winnerText'+id).style.display='block'
        diceImg.innerHTML=''
        isFinished=true
    }
}
//  To add active CSS class to active player
function activePlayer(id){
    if (id===1){
        document.getElementById('player1').classList.add('active');
        document.getElementById('player2').classList.remove('active');
    }else{
        document.getElementById('player2').classList.add('active');
        document.getElementById('player1').classList.remove('active');
    }
}
// Start button
startBtn.addEventListener("click", () => {
    if (!isFinished){
        let random= Math.floor(Math.random() * (6 - 1)) + 1;
        showDice(random);
        currentScore(random);
    }    
  });
// To calculate player's current score until dice=1
function currentScore(num){
        if(num===1){
            current=0
            document.getElementById('current'+playerID).innerHTML=current
            playerID===1 ? playerID=2 : playerID=1
            activePlayer(playerID)
        }
        else{
            current+=num;
            document.getElementById('current'+playerID).innerHTML=current
            activePlayer(playerID)
        }
}
// To save current score to main score
saveGame.addEventListener("click",()=>{
    if(!isFinished){
        if(playerID==1){
            score1+=current;
            current=0
            document.getElementById('score'+playerID).innerHTML=score1
            document.getElementById('current'+playerID).innerHTML=0
            diceImg.innerHTML='<image src="image/image.png" class="dice" alt="dice 1"/>';
            findWinner(score1,playerID)
            playerID=2;
        }else{
            score2+=current;
            current=0
            document.getElementById('score'+playerID).innerHTML=score2
            document.getElementById('current'+playerID).innerHTML=current
            diceImg.innerHTML='<image src="image/image.png" class="dice" alt="dice 1"/>';
            findWinner(score2,playerID)
            playerID=1
    
        }
        activePlayer(playerID)
    }
})


// Reset buttom / new Game
newGame.addEventListener('click', ()=>{ 
    current=0;
playerID=1;
score1=0
score2=0
isFinished=false;
document.getElementById('current1').innerHTML=current
document.getElementById('current2').innerHTML=current
document.getElementById('score1').innerHTML=score1
document.getElementById('score2').innerHTML=score1
document.getElementById('player1').classList.remove('winner');
document.getElementById('player2').classList.remove('winner');
document.getElementById('winnerText1').style.display='none'
document.getElementById('winnerText2').style.display='none'
activePlayer(playerID)
diceImg.innerHTML=''
})

