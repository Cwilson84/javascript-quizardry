

var timeLeft = 60;
var userScore;
document.getElementById("countdown").innerHTML = timeLeft;
var questionsArray = [{
    question: "What is the correct syntax to embed an image using HTML?",
    options: [`<image src="image.png">`, `img src="image.png`, `<img src="image.png">`, `<image href="image.png">`],
    answer: 2 
}];

$(".start-button").click( function() {
    $(this).css({
        background: 'grey'
    });
    $(".start-button").prop("disabled", true);
    document.getElementById("question").innerHTML = (Math.floor(Math.random) * questionsArray.length);
    var timerColorChange = document.querySelector(".timer-container");
    var timeLeft = 60;
    setInterval(function() {
    if  (timeLeft >= 21) {
        document.getElementById("countdown").innerHTML = timeLeft;
    } else if (timeLeft >= 11 && timeLeft <= 30) {
        timerColorChange.setAttribute("style", "background-color: rgb(184, 184, 10);");
        document.getElementById("countdown").innerHTML = timeLeft;
    } else if (timeLeft <= 10 && timeLeft >= 0) {
        timerColorChange.setAttribute("style", "background-color: #BF3325;");
        document.getElementById("countdown").innerHTML = timeLeft;
    } else {
        clearInterval();
    }

    timeLeft -= 1;
        if (timeLeft === -2) {
         var tryAgain = confirm("Time has expired for this attempt.  You scored " + userScore + ".  Try Again?");
        if (tryAgain === true) {
             location.reload();
        } else {
             location.href="https://google.com";
        }
    
    }         
}, 1000);
});

console.log(question);



