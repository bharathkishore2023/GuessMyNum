'use strict';
let secretNum=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener
('click',function(){
  const guess= document.querySelector('.guess').value;
  let score= document.querySelector('.score').textContent;
  if(!guess){
      document.querySelector('.message').textContent="No number";
  }

  else if(guess==secretNum) {
      console.log(document.querySelector('.number').textContent=secretNum);
      document.querySelector('.message').textContent='Correct Answer!'; 
      document.querySelector('body').style.backgroundColor="green";
        document.querySelector('.number').style.width="30rem";      
        document.querySelector('.number').style.fontSize="larger";
        if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore; 
        }
 }  
 else if(guess>secretNum) {
     if(score>1){
     document.querySelector('.message').textContent="Too High";
     score--;
     document.querySelector('.score').textContent=score;
     }
     else console.log(document.querySelector('.message').textContent="You have lost the game");
     
 }
 else if(guess<secretNum){
     if(score>1){
     document.querySelector('.message').textContent="Too Low";
     score--;
     document.querySelector('.score').textContent=score;
     }
     else console.log(     document.querySelector('.message').textContent="You have lost the match");
 }

});
document.querySelector('.again').addEventListener('click',function(){
secretNum=Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent="Guess karo";
document.querySelector('.number').textContent="?";
document.querySelector('.guess').value="";
document.querySelector('.score').textContent=score;
document.querySelector('body').style.backgroundColor="#222";
document.querySelector('.number').style.width="15rem";
});






