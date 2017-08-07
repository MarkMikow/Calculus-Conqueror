$(document).ready(function() {
  var randomNumber;
  var randomQuestion;
  getQuestion();

function getQuestion() {
  var questions = [
  "A001", "A002", "A00300000000000000000", "A004", "A005"
  ]

  randomNumber = Math.floor(Math.random() * (questions.length));
  randomQuestion = questions[randomNumber];

  $(".question").text(randomQuestion);
}

  $("#newQuestion").on("click", function() {
    getQuestion();
  });

});