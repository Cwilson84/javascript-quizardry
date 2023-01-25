var timeLeft = 30;
document.getElementById("countdown").innerHTML = timeLeft;
$(".start-button").click( function() {
    $(this).css({
        background: 'grey'
    });
    $(".start-button").prop("disabled", true);
    var timerColorChange = document.querySelector(".timer-container");
    var timeLeft = 30;
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
         var tryAgain = confirm("Game Over. Try Again?");
        if (tryAgain === true) {
             location.reload();
        } else {
             location.href="https://google.com";
        }
    }         
}, 1000);
});



