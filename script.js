var timerEl = document.getElementById("#timer");
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
]