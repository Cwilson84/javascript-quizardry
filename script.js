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
    var userName = greet ? greet.trim().toLowerCase() : "random internet user";
    console.log(userName);
}

//Function to disable start button and begin timer when listener fires
function startButtonClicked() {
    startButton.setAttribute("style", "background-color: darkgrey");
    startButton.style.pointerEvents = 'none';
    timerEl.innerHTML = timeLeft;
    timer();
};

startButton.addEventListener("click", startButtonClicked);
//Timer function complete with color change feature
function timer() {
    timerContainer.setAttribute("style", "background-color: green");
    var intervalId = setInterval(() => {
        console.log(timeLeft);
        if (timeLeft <= 31 && timeLeft >= 12) {
            timerContainer.setAttribute("style", "background-color: yellow");
            console.log("Hurry up! Only " + timeLeft + " seconds left.");
        };
        if (timeLeft <= 11) {
            timerContainer.setAttribute("style", "background-color: red");
            console.log("Less than 10 seconds left!");
        };
        if (timeLeft === 1) {
            clearInterval(intervalId);
            timerContainer.setAttribute("style", "background-color: darkgrey");
            console.log("Time's up. Do try again.");
        };
        timeLeft--;
        timerEl.innerHTML = timeLeft;
    }, 1000);
};
//Main content begins here
helloThere();






