$(document).ready(function() {




var questions = [ {Question: "Which MCU movie featured Spider-Man’s first appearance?", choices: ["Spider-Man: Homecoming","Avengers: Age of Ultron", "Iron Man 3", "Captain America: Civil War"], Answer: "Captain America: Civil War", GIFY:"https://media.giphy.com/media/KnjBhO9j4DVG8/giphy.gif"} , 
                 {Question: "Who played the Hulk before Mark Ruffalo?", choices: ["Liam Hemsworth","Gary Oldman", "Edward Norton", "Will Smith"], Answer: "Edward Norton", GIFY: "https://media.giphy.com/media/aS8ypUweGOXMA/giphy.gif"},
                 {Question: "What is the name of Thor’s hammer?", choices: ["Balder","Vanir", "Aesir", "Mjolnir"], Answer: "Mjolnir", GIFY: "https://media.giphy.com/media/xUPGGdn5TaL8Mfpwwo/giphy.gif"},
                 {Question: "Where did Scott Lang work before becoming Ant-Man?", choices: ["Jamba Juice","Chipotle", "McDonald’s", "Baskin Robbins"], Answer: "Baskin Robbins", GIF:"https://media.giphy.com/media/VIybTqiAz8E5W/giphy.gif"}]

var answers = [];

var correct=0;
var incorrect =0;
var unanswered =0;

var timer=15;
var timerId;




$("#play").on("click", playGame);



function playGame () {

clearInterval(timerId);
timerId = setInterval(countdown, 1000);

function countdown () {
  timer--;

  $("#timer").text(timer);

  if (timer === 0) {
    
    clearInterval(timerId);
    endGame();
    
  }

}

$("#questionForm").empty();  


for (i=0; i<questions.length; i++) {
  var questionDiv =$("<div>");
  questionDiv.attr("id", "question"+i);
  var questionText = $("<div>");
    questionText.attr("id", "question-text"+i);
    questionDiv.addClass("question");
    questionText.text(questions[i].Question);
    $("#questionForm").append(questionDiv);
    $("#question"+i).append(questionText);
    var choicesDiv=$("<div>");
    choicesDiv.addClass("choices");
    choicesDiv.attr("id", "question-choices"+i);
    $("#question"+i).append(choicesDiv);
   
    
    console.log(questions[i].Question);
    for (j=0; j < questions[i].choices.length; j++) {
  
      var questionInput = $('<input type ="radio" name ="' + 'q'+ i + '" value="' + questions[i].choices[j] + '">' + questions[i].choices[j] + '</input><br/>');
    questionInput.addClass("radio");

    
    $("#question-choices"+i).append(questionInput);
    console.log(questions[i].choices[j]);}
}
  
  
  
$("#submit").on("click", endGame);

function endGame() {

clearInterval(timerId);
  
  for (i=0; i < questions.length; i++) {


    var radioVal = $('input[name="' + 'q' + i +'"]:checked').val();
    answers.push(radioVal);
    console.log("Your answer to Question " + i + " was " + radioVal);
    if (radioVal === questions[i].Answer) {
        correct++;
        console.log("Your answer was correct");
    } else if (radioVal === undefined) {
        unanswered++
    } else {
      incorrect++;
    }
  }
  
  console.log(answers);

var resultDiv=$("<div>");
resultDiv.attr("id", "results")

var correctDiv =$("<div>");
correctDiv.addClass("center-results");
var incorrectDiv=$("<div>");
incorrectDiv.addClass("center-results");
var unansweredDiv=$("<div>");
unansweredDiv.addClass("center-results");


correctDiv.text("You answered " + correct+ " correct");
incorrectDiv.text("You answered " + incorrect+ " incorrect");
unansweredDiv.text("You did not answer " + unanswered + " questions");
$("#questionForm").empty();
$("#questionForm").append(resultDiv);
$("#results").append(correctDiv, incorrectDiv, unansweredDiv);

  
 console.log("Correct " + correct);
 console.log("Incorrect " + incorrect);
 console.log("Unaswered "+ unanswered);
  
  
};
  

};



});




