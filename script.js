//References and global variable declarations
var questionContainer = document.querySelector(".question-container");
var optionContainer =  document.querySelector(".option-container");
var greetingLander = document.querySelector(".greeting-lander");
var question = document.getElementById("question");
var startButton = document.getElementById("start-button");
var skipNextButton = document.getElementById("skip-next-button");
var timeLeft = 60;
var userName;
var timerStarted = false;
var timerContainer = document.querySelector(".timer-container");
var timerEl = document.getElementById("countdown");
var welcomeText = document.getElementById("welcome-text");

//questions and answer object array
var questions = [{
    question: "Which is the correct way to embed an image using HTML?",
    options: [`<img rel="">`, `<image src="">`, `<img src()>`, `<img src="">`],
    answer: `<img src="">`
},
{
    question: "How do you style a class with CSS?",
    options: [`#(class-name)`, `.class-name`, `.(class-name)`, `#class-name`],
    answer: `.class-name`
},
{
    question: "Which client side error code doesn't exist?",
    options: ["418 - I'm a Teapot", "401 - Unauthorized", "420 - Bad Return", "451 - Unavailable For Legal Reasons"],
    answer: "420 - Bad Return"
},
];

//Page greeting and name grab function
function helloThere() {
    var greet = prompt("Please enter your name.");
    userName = greet ? greet.trim().charAt(0).toUpperCase() + greet.slice(1) : "random internet user";
    var welcomeMessage = (`Hello, ${userName}, welcome to my quiz! A few things to note before you begin.<br><br>Firstly, once you've clicked the <strong>"Start"</strong> 
        button, you will be given a one second delay for the content to load before the timer starts. 
        This is for your benefit because here, every second counts.<br><br>Also, you will note there is a button opposite of <strong>"Start"</strong> which is 
        labeled <strong>"Next"</strong>. This button will change to <strong>"Skip"</strong> while a question is active. This will come 
        in handy as <strong>any incorrect answer will result in a 10 second penalty</strong>, however, the use of the <strong>"Skip"</strong> button will allow you to load the next 
        question without penalty. You will still be required to answer all questions before the end to complete the quiz. Once a question has been answered,
        the button will display <strong>"Next"</strong> again to continue.<br><br>All that said, click 
        <strong>"Start"</strong> when ready and best of luck!`);
    console.log(`Hello, ${userName}! Enjoy the quiz!`);
    welcomeText.innerHTML = welcomeMessage;
}

//Grab name for console fun!
helloThere();

function displayQuestion(questionObj) {
    question.innerHTML = questionObj.question;
    optionContainer.classList.remove("correct-bg", "incorrect-bg");
    
    // clear any existing options
    optionContainer.innerHTML = "";
  
    questionObj.options.forEach(option => {
      let optionEl = document.createElement("p");
      optionEl.className = "option";
      optionEl.innerHTML = option;
      optionContainer.append(optionEl);
      console.log(optionEl);
    });
  }




//Function to moderate timer for content load and disable start button on click

function startButtonClicked() {
    startButton.setAttribute("style", "background-color: darkgrey");
    startButton.style.pointerEvents = 'none';
    timerEl.innerHTML = timeLeft;
    timerContainer.setAttribute("style", "background-color: green; width: 62vw");
    welcomeText.innerHTML = "";
    setTimeout(timer, 1000);
    greetingLander.setAttribute("style", "display: none");
    questionContainer.setAttribute("style", "display: block");
    displayQuestion(questions[0]);
    currentQuestionIndex = 0;
    skipNextButton.innerHTML = "Skip";
    skipNextButton.setAttribute("style", "background-color: green; pointer-events: auto;");




};

startButton.addEventListener("click", startButtonClicked);
//Timer function complete with color change and shrinking feature
function timer() {
    var shrinkingClock = 62;
    timerContainer.setAttribute("style", "background-color: green; width: " + shrinkingClock + "vw");
    var intervalId = setInterval(() => {
        if (timeLeft <= 31 && timeLeft >= 12) {
            timerContainer.setAttribute("style", "background-color: rgb(184, 184, 10);");
            console.log(`Hurry up, ${userName}! Only 30 seconds left.`);
        };
        if (timeLeft <= 11) {
            timerContainer.setAttribute("style", "background-color: red");
            console.log(`Less than 10 seconds left! You got this, ${userName}!`);
        };
        if (timeLeft === 1) {
            clearInterval(intervalId);
            timerContainer.setAttribute("style", "background-color: darkgrey");
            console.log(`You're outta time, ${userName}. Refresh the page to try again, if you didn't bring the DMC.`);
            skipNextButton.setAttribute("style", "background-color: darkgrey");
            skipNextButton.style.pointerEvents = 'none';
        };
        timeLeft--;
        timerEl.innerHTML = timeLeft;
        shrinkingClock--;
        timerContainer.style.width = shrinkingClock + "vw";
    }, 1000);
}









