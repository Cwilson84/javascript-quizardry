//References and global variable declarations
var questionContainer = document.querySelector(".question-container");
var question = document.getElementById("question");
var startButton = document.getElementById("start-button");
var skipNextButton = document.getElementById("skip-next-button");
var timeLeft = 60;
var userName;
var timerStarted = false;
var timerContainer = document.querySelector(".timer-container");
var timerEl = document.getElementById("countdown");

//Page greeting and name grab function
function helloThere() {
    var greet = prompt("Please enter your name.");
    userName = greet ? greet.trim().charAt(0).toUpperCase() + greet.slice(1) : "random internet user";
    console.log(`Hello, ${userName}. Enjoy the quiz!`);
}
//Grab name for console fun!
helloThere();

//Function to disable start button and begin timer when listener fires
function startButtonClicked() {
    startButton.setAttribute("style", "background-color: darkgrey");
    startButton.style.pointerEvents = 'none';
    timerEl.innerHTML = timeLeft;
    timerContainer.setAttribute("style", "background-color: green; width: 62vw");
    setTimeout(timer, 500);
};

startButton.addEventListener("click", startButtonClicked);
//Timer function complete with color change feature
function timer() {
    var shrinkingClock = 62;
    timerContainer.setAttribute("style", "background-color: green; width: " + shrinkingClock + "vw");
    var intervalId = setInterval(() => {
        if (timeLeft <= 31 && timeLeft >= 12) {
            timerContainer.setAttribute("style", "background-color: yellow");
            console.log(`Hurry up, ${userName}! Only 30 seconds left.`);
        };
        if (timeLeft <= 11) {
            timerContainer.setAttribute("style", "background-color: red");
            console.log(`Less than 10 seconds left! You got this, ${userName}!`);
        };
        if (timeLeft === 1) {
            clearInterval(intervalId);
            timerContainer.setAttribute("style", "background-color: darkgrey");
            console.log(`You're outta time, ${userName}. Refresh the page to try again, if you didn't bring a DMC DeLorean.`);
            skipNextButton.setAttribute("style", "background-color: darkgrey");
            skipNextButton.style.pointerEvents = 'none';
        };
        timeLeft--;
        timerEl.innerHTML = timeLeft;
        shrinkingClock --;
        timerContainer.style.width = shrinkingClock + "vw";
    }, 1000);
};
//Main content begins here







