
$(document).ready(function() {
  var randomNumber;
  var randomQuestion;
  getQuestion();

function getQuestion() {
  var questions = [],
  index = 0;

  questions[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502128421/A001_sbx0hi.png' alt='A001'>"; 
  questions[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502128421/A002_wsbtzh.png' alt='A002'>";
  questions[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502128421/A003_xm3oxw.png' alt='A003'>";
  questions[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502135015/A004_xfowwk.png' alt='A004'>";
  questions[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502135015/A005_zuvkyg.png' alt='A005'>";
  questions[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502135015/A006_fmae9v.png' alt='A006'>";
  questions[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502135015/A007_wjqjzj.png' alt='A007'>";
  questions[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502135015/A008_vkcyy1.png' alt='A008'>";
  questions[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_123/v1502135015/A009_irew0g.png' alt='A009'>";
  questions[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,w_388/v1502135015/A010_t5enh0.png' alt='A010'>"; 

  randomNumber = Math.floor(Math.random() * (questions.length));
  randomQuestion = questions[randomNumber];

  $(".question").html(randomQuestion).width = "400";
}

  $("#newQuestion").on("click", function() {
    getQuestion();
  });

});
