const questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within _____.",
    "Arrays in JavaScript can be used to store _____.",
    "String values must be enclosed within _____ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"]

const answers = {
    1:["strings", "booleans", "alerts", "numbers"],
    2:["quotes", "curly brackets", "parentheses", "square brackets"],
    3:["numbers and strings", "other arrays", "booleans", "all of the above"],
    4:["commas", "curly brackets", "quotes", "parentheses"],
    5:["JavaScript", "terminal/bash", "for loops", "console log"]
};

const solutions = [
    3,
    3,
    4,
    1,
    4
]

var gameTimer = document.querySelector("#timer")

var initialTime = 60;
gameTimer.textContent = "Time: "+initialTime;
var timerInterval
function setTime() {
    
    if(initialTime <= 0) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(function() {
        initialTime--;
        gameTimer.textContent = "Time: "+initialTime;
        
      
  
    }, 1000);
}

function checkAnswer(userInput, probNum){
    if(userInput == solutions[probNum]){
        document.getElementById("result").textContent = 'Correct!'
    }else{
        document.getElementById("result").textContent = 'Wrong!'
        initialTime = initialTime - 10
        if(initialTime <= 0) {
            clearInterval(timerInterval);
            gameTimer.textContent = "Time: 0"
        }
    }
    probNum < 4 && renderQuestion(probNum + 1)
}

function renderQuestion(probNum = 0){
    document.getElementById("question").textContent = questions[probNum];
    const answerSet = probNum +1;
    for(var i = 1; i <= answers['1'].length; i++){
        document.getElementById(i.toString()).textContent = `${i}: ${answers[answerSet][i-1]}`
    }
    


        document.getElementById("1").addEventListener("click", () => checkAnswer(1, probNum));
        document.getElementById("2").addEventListener("click", () => checkAnswer(2, probNum));
        document.getElementById("3").addEventListener("click", () => checkAnswer(3, probNum));
        document.getElementById("4").addEventListener("click", () => checkAnswer(4, probNum));
}

function startQuiz(){
    document.getElementById("titleScreen").style.visibility = "hidden";
    document.getElementById("highscoresLink").style.visibility = "hidden";
    document.getElementById("gameScreen").style.visibility = "visible";

    renderQuestion();
}

  document.getElementById("startButton").addEventListener("click", setTime);
  document.getElementById("startButton").addEventListener("click", startQuiz);

  document.getElementById("gameScreen").style.visibility = "hidden";
  document.getElementById("scoreScreen").style.visibility = "hidden";
  document.getElementById("highscoreScreen").style.visibility = "hidden";
