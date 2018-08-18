

var scores, roundScore, activePlayer, gamePlaying;

var diceroll =[];


init();



//Whole game loop

document.querySelector('.btn-roll').addEventListener('click',function(){

  if(gamePlaying){

  // Random number
  var dice = Math.floor(Math.random()*6) +1;
  var dice1 = Math.floor(Math.random()*6) +1;
  diceroll.push(dice);


  console.log( dice, dice1);



  //display the result

var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = "dice-" + dice + '.png';

  var diceDOM1 = document.querySelector('.dice1');
    diceDOM1.style.display = 'block';
    diceDOM1.src = "dice-" + dice1 + '.png';

  //update rounds

  if (dice === 6 && dice1 === 6)
  {
    scores[activePlayer] = 0;
    roundScore = 0;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('#current-' + activePlayer).textContent = roundScore;


  }
  else if (dice !== 1 && dice1 !== 1) {

    roundScore = (roundScore +dice) + (roundScore = dice1);
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }
  else
  {
    scores[activePlayer] = 0;
    document.querySelector('#current-' + activePlayer).textContent = scores[activePlayer];

  }

}
});


//hold function
  document.querySelector('.btn-hold').addEventListener('click', function()
  {
    if(gamePlaying){
      scores[activePlayer] += roundScore;

      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      if(scores[activePlayer] >= document.getElementById('ramka').value)
      {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      gamePlaying = false;
      }
      else
        {
          nextPlayer();
        }
      }


  }
    );





function nextPlayer(){
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
  roundScore = 0;

  document.getElementById('current-0').textContent = "0";
  document.getElementById('current-1').textContent = "0";


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
};



document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    scores = [0,0];
    activePlayer = 0;
    roundScore =  0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

};
