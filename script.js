var questionText = document.getElementById("#question");
var optionOne = document.getElementById("#op1");
var optionTwo = document.getElementById("#op2");
var optionThree = document.getElementById("#op3");
var optionFour = document.getElementById("#op4"); 

var randomQuestions = [{
    id: 0,
    q: "?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: true }
    ]

},
{
    id: 0,
    q: "?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: true },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]

},
{
    id: 0,
    q: "?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: true },
        { text: "", isCorrect: false }
    ]

}, 
{
    id: 0,
    q: "?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: true },
        { text: "", isCorrect: false }
    ]

}, 
{
    id: 0,
    q: "?",
    a: [{ text: "", isCorrect: true },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]

},
{
    id: 0,
    q: "?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: true},
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]

}
];

var timerColorChange = document.querySelector(".timer-container");
var timeLeft = 30;
document.getElementById("countdown").innerHTML = timeLeft;
var timerFunc = setInterval(function() {
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




