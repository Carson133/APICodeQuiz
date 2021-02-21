var gameTimer = document.querySelector("#timer")

var initialTime = 60;
gameTimer.textContent = "Time: "+initialTime;

function setTime() {

    var timerInterval = setInterval(function() {
      initialTime--;
      gameTimer.textContent = "Time: "+initialTime;
  
      if(initialTime === 0) {
        clearInterval(timerInterval);
        
      }
  
    }, 1000);
  }

function startGame(){
    document.getElementById("titleScreen").style.visibility = "hidden";
    document.getElementById("gameScreen").style.visibility = "visible";
}

  document.getElementById("startButton").addEventListener("click", setTime);
  document.getElementById("startButton").addEventListener("click", startGame);


  document.getElementById("gameScreen").style.visibility = "hidden";
  document.getElementById("scoreScreen").style.visibility = "hidden";
  document.getElementById("highscoreScreen").style.visibility = "hidden";
  document.getElementById("resultScreen").style.visibility = "hidden";
