$(document).ready(function() {

var questions = [ {Question: "Which MCU movie featured Spider-Man’s first appearance?", choices: ["Spider-Man: Homecoming","Avengers: Age of Ultron", "Iron Man 3", "Captain America: Civil War"], Answer: "Captain America: Civil War", GIFY:"https://media.giphy.com/media/KnjBhO9j4DVG8/giphy.gif"} , 
                 {Question: "Who played the Hulk before Mark Ruffalo?", choices: ["Liam Hemsworth","Gary Oldman", "Edward Norton", "Will Smith"], Answer: "Edward Norton", GIFY: "https://media.giphy.com/media/aS8ypUweGOXMA/giphy.gif"},
                 {Question: "What is the name of Thor’s hammer?", choices: ["Balder","Vanir", "Aesir", "Mjolnir"], Answer: "Mjolnir", GIFY: "https://media.giphy.com/media/xUPGGdn5TaL8Mfpwwo/giphy.gif"},
                 {Question: "Where did Scott Lang work before becoming Ant-Man?", choices: ["Jamba Juice","Chipotle", "McDonald’s", "Baskin Robbins"], Answer: "Baskin Robbins", GIF:"https://media.giphy.com/media/VIybTqiAz8E5W/giphy.gif"}]




for (i=0; i<questions.length; i++) {
    var questionText = $("<p>");
    questionText.attr("id", "question"+i);
    questionText.text(questions[i].Question);
    $("#questionForm").append(questionText);
    
    console.log(questions[i].Question);
    for (j=0; j < questions[i].choices.length; j++) {
    var questionChoice = $('<input type ="radio" name ="' + i + '" value="' + questions[i].choices[j] + '">');
    questionChoice.HTML(questions[i].choices[j] + "<br>");
  
    $("#questionForm").append(questionChoice);

    console.log(questions[i].choices[j]);}


}


});




