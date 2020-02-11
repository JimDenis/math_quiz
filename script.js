var questions = ["What does 4 + 5 =", "What does 5 + 5 = ", "What does 3 + 3 =", "What does 4 + 4 =",
                 "What does 6 + 5 =", "What does 7 + 2 = ", "What does 8 + 8 =", "What does 7 + 6 =",
                 "What does 8 + 3 =", "What does 10 + 2 = "]
var option0 = ["9","12", "11", "9", "13", "8", "14", "11", "10", "9"];
var option1 = ["5","11", "7", "10", "12", "9","15", "12", "11", "10"];
var option2 = ["10", "10", "6", "12", "11", "7", "16", "10", "9", "12"];
var option3 = ["123", "647", "22", "8", "10", "6", "11", "13", "12", "11"];
var correctAnswer = ["9", "10", "6", "8", "11", "9", "16", "13", "11", "12" ];

var questionEl = document.getElementById("question"); 

var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var SU = document.getElementById("start");
var A0 = document.getElementById("bAnswer0");
var A1 = document.getElementById("bAnswer1");
var A2 = document.getElementById("bAnswer2");
var A3 = document.getElementById("bAnswer3");
var R1 = document.getElementById("results");
var int = document.getElementById("HSint");
var HSB = document.getElementById("HSbutton");


function guess0() {
//  console.log("In Guess 0");
//  console.log(option0[currIndex]);
//  console.log(correctAnswer[currIndex]);

  if (option0[currIndex] == correctAnswer[currIndex]) {
    numOfCorr = numOfCorr + 1;
    console.log("correct");
   // R1 = "correct";
    document.getElementById("results").innerHTML = "correct";
  } else {
    numOfIncorr = numOfIncorr + 1;
    console.log("incorrect");
   // R1 = "incorrect";
   document.getElementById("results").innerHTML = "incorrect";
  }

  setTimeout(askQuestions, 1000);

  //askQuestions();
}

function guess1() {
  console.log("In Guess 1");
  console.log(option1[currIndex]);
  console.log(correctAnswer[currIndex]);

  if (option1[currIndex] == correctAnswer[currIndex]) {
    numOfCorr = numOfCorr + 1;
    console.log("correct");
   // R1 = "correct";
    document.getElementById("results").innerHTML = "correct";
  } else {
    numOfIncorr = numOfIncorr + 1;
    console.log("incorrect");
   // R1 = "incorrect";
   document.getElementById("results").innerHTML = "incorrect";
  }

  setTimeout(askQuestions, 1000);
  
}

function guess2() {
  console.log("In Guess 2");
  console.log(option2[currIndex]);
  console.log(correctAnswer[currIndex]);

  if (option2[currIndex] == correctAnswer[currIndex]) {
    numOfCorr = numOfCorr + 1;
    console.log("correct");
   // R1 = "correct";
    document.getElementById("results").innerHTML = "correct";
  } else {
    numOfIncorr = numOfIncorr + 1;
    console.log("incorrect");
   // R1 = "incorrect";
   document.getElementById("results").innerHTML = "incorrect";
  }

  setTimeout(askQuestions, 1000);
  
}

function guess3() {

  console.log("In Guess 3");
  console.log(option3[currIndex]);
  console.log(correctAnswer[currIndex]);

  if (option3[currIndex] == correctAnswer[currIndex]) {
    numOfCorr = numOfCorr + 1;
    console.log("correct");
   // R1 = "correct";
    document.getElementById("results").innerHTML = "correct";
  } else {
    numOfIncorr = numOfIncorr + 1;
    console.log("incorrect");
   // R1 = "incorrect";
   document.getElementById("results").innerHTML = "incorrect";
  }

  setTimeout(askQuestions, 1000);
  
}


//function prepareRead() {
//  var timeLeft = 60;
//  var instrDone = true;
//
//  
//  timeInterval = setInterval(function() {
//      timerEl.textContent = timeLeft + " seconds remaining";
//      timeLeft--;
//     
//  
//    if (timeLeft == 0) {
//      var millisecondsPerWord = alert("Ready to start ?");
//      return instrDone;
//     
//    }
// 
//
//  }, 1000);
//} 

function askQuestions(event) {
//  console.log(numOfCorr);
//  console.log(numOfIncorr);
//  console.log(questions.length);
//  console.log("In askquestion");

  currIndex = currIndex + 1;

//  console.log(currIndex);

  if (currIndex < questions.length) {
    questionEl.textContent = questions[currIndex];
    document.getElementById("bAnswer0").value = option0[currIndex]; 
    document.getElementById("bAnswer1").value = option1[currIndex]; 
    document.getElementById("bAnswer2").value = option2[currIndex]; 
    document.getElementById("bAnswer3").value = option3[currIndex]; 
    document.getElementById("results").innerHTML = "";
  } else {
    //endGame();
    gameOver = true;
  }
  
} 

function startGame() {

  document.getElementById('start').style.display = 'none';
  document.getElementById('bAnswer0').style.display = 'inline';
  document.getElementById('bAnswer1').style.display = 'inline';
  document.getElementById('bAnswer2').style.display = 'inline';
  document.getElementById('bAnswer3').style.display = 'inline';

  timeInterval = setInterval(function(event) {
  timerEl.textContent = timeLeft + " seconds remaining";
  timeLeft--;
 
  if (timeLeft == 0 || gameOver)  {
    timerEl.textContent = "";
    clearInterval(timeInterval);
    endGame(0)
  };

  }, 1000);

}

function endGame () {

  holdRemainingTime = timeLeft;  
  gameOver = true;
  questionEl.textContent = "";

  document.getElementById('bAnswer0').style.display = ""
  document.getElementById('bAnswer1').style.display = 'none';
  document.getElementById('bAnswer2').style.display = 'none';
  document.getElementById('bAnswer3').style.display = 'none';
//  document.getElementById("results").innerHTML = "Correct = " + numOfCorr + " Incorrect = " + numOfIncorr + " time left  =" + holdRemainingTime;
  document.getElementById("corrTimes10").innerHTML = "Your correct answers = " + numOfCorr;   
  document.getElementById("remSeconds").innerHTML = "Your time remaining  = " + holdRemainingTime; 
  var holdTotalPoints = (numOfCorr * 10) + holdRemainingTime;
  document.getElementById("totalPoints").innerHTML = "Your total points = " + holdTotalPoints; 

 // console.log("going in");
  
  var ls_High_Score = localStorage.getItem("High_Score");
  var ls_init = localStorage.getItem("INT"); 

 // console.log("high score = " + ls_High_Score);
  
  if (ls_High_Score === null) {
    document.getElementById("highScore").innerHTML= "NO CURRENT HIGH SCORE";
    ls_High_Score = 0;
  } else {
    document.getElementById("highScore").innerHTML= "HIGH SCORE = " + ls_High_Score + " BY " + ls_init;
  } 

 // console.log("total points = " + holdTotalPoints);
 // console.log("old high score = " + ls_High_Score);

  //document.getElementById("newHighScore").innerHTML = "HIGH SCORE IS STILL = " + ls_High_Score;

  if (holdTotalPoints > ls_High_Score) {
    document.getElementById("newHighScore").innerHTML = "CONGRATS YOU GOT THE NEW HIGH SCORE = " + holdTotalPoints;
    localStorage.setItem("High_Score", holdTotalPoints);
    document.getElementById('HSbutton').style.display = 'inline';
    document.getElementById('HSint').style.display = 'inline';
  } else {
    document.getElementById("newHighScore").innerHTML= "SORRY NO HIGH SCORE FOR YOU";
  }  

 // console.log("coming out");

  
}

function startIt() {
 // console.log("before 1");
  startGame();
  askQuestions();
//  console.log("after 1")
}

function enterName() {
  var HSinitals =  document.getElementById("HSint").value;
  localStorage.setItem("INT", HSinitals) ;

  document.getElementById('HSbutton').style.display = 'none';
  document.getElementById('HSint').style.display = 'none';

  var ls_High_Score = localStorage.getItem("High_Score");
  var ls_init = localStorage.getItem("INT"); 

  document.getElementById("highScore").innerHTML= "HIGH SCORE = " + ls_High_Score + " BY " + ls_init;

//  console.log("before 1");
//  console.log("after 1")
}

var timeLeft = 60;
var iDone = false; 
var currIndex = -1
var numOfCorr = 0;
var numOfIncorr = 0;
var timeInterval = 0;
var gameOver = false;

SU.addEventListener("click", startIt);
A0.addEventListener("click", guess0);
A1.addEventListener("click", guess1);
A2.addEventListener("click", guess2);
A3.addEventListener("click", guess3);
HSB.addEventListener("click", enterName);


