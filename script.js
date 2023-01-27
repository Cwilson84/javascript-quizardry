

var timeLeft = 30;
var userScore = 0;
document.getElementById("countdown").innerHTML = timeLeft;
var questionsArray = [{
    question: "What is the correct syntax to embed an image using HTML?",
    options: [`<image src="image.png">`, `img src="image.png`, `<img src="image.png">`, `<image href="image.png">`],
    answer: 2 
},
{
    question: "Objects in JavaScript can contain what types of data?",
    options: ["Boolean", "String", "Number", "All the Above"],
    answer: 3
}];
// begin on start click||button also disabled so you can't spam for time
$(".start-button").click( function() {
    $(this).css({
        background: 'grey'
    });
    $(".start-button").prop("disabled", true);
// question and option generation
    document.getElementById("question").innerText = questionsArray[0].question;
    document.getElementById("op1").innerText = questionsArray[0].options[0];
    $("#op1").click( function() {
        timeLeft -= 10;
        document.getElementById("result").innerText = userScore + "/10 Correct";
        $(this).css({
            background: '#BF3325'  
        });
        $("#op1").prop("disabled", true);
        $("#op2").prop("disabled", true);
        $("#op3").prop("disabled", true);
        $("#op4").prop("disabled", true);
       
    })
    document.getElementById("op2").innerText = questionsArray[0].options[1];
    $("#op2").click( function() {
        timeLeft -= 10;
        document.getElementById("result").innerText = userScore + "/10 Correct";
        $(this).css({
            background: '#BF3325'  
        });
        $("#op1").prop("disabled", true);
        $("#op2").prop("disabled", true);
        $("#op3").prop("disabled", true);
        $("#op4").prop("disabled", true);
    
    })
    document.getElementById("op3").innerText = questionsArray[0].options[2];
    $("#op3").click( function() {
        userScore += 1;
        document.getElementById("result").innerText = userScore + "/10 Correct";
        $(this).css({
            background: 'green'  
        });
        $("#op1").prop("disabled", true);
        $("#op2").prop("disabled", true);
        $("#op3").prop("disabled", true);
        $("#op4").prop("disabled", true);
     
    })
    document.getElementById("op4").innerText = questionsArray[0].options[3];
    $("#op4").click( function() {
        timeLeft -= 10;
        document.getElementById("result").innerText = userScore + "/10 Correct";
        $(this).css({
            background: '#BF3325'  
        });
        $("#op1").prop("disabled", true);
        $("#op2").prop("disabled", true);
        $("#op3").prop("disabled", true);
        $("#op4").prop("disabled", true);
    })
    $(".next-button").click( function() {
        document.getElementById("question").innerText = questionsArray[1].question;
        document.getElementById("op1").innerText = questionsArray[1].options[0]
        document.getElementById("op2").innerText = questionsArray[1].options[1]
        document.getElementById("op3").innerText = questionsArray[1].options[2]
        document.getElementById("op4").innerText = questionsArray[1].options[3]
        $("#op1").prop("disabled", false);
        $("#op2").prop("disabled", false);
        $("#op3").prop("disabled", false);
        $("#op4").prop("disabled", false);
        $("#op1").css({
            background: "#bfcacbef"});
        $("#op2").css({
            background: "#bfcacbef"});
        $("#op3").css({
            background: "#bfcacbef"});
        $("#op4").css({
            background: "#bfcacbef"});
        

        $("#op1").click( function() {
            document.getElementById("op2").innerText = questionsArray[1].options[0];
            timeLeft -= 10;
            document.getElementById("result").innerText = userScore + "/10 Correct";
            $(this).css({
                background: '#BF3325'  
            });
            $("#op1").prop("disabled", true);
            $("#op2").prop("disabled", true);
            $("#op3").prop("disabled", true);
            $("#op4").prop("disabled", true);
           
        })
        document.getElementById("op2").innerText = questionsArray[1].options[1];
        $("#op2").click( function() {
            timeLeft -= 10;
            document.getElementById("result").innerText = userScore + "/10 Correct";
            $(this).css({
                background: '#BF3325'  
            });
            $("#op1").prop("disabled", true);
            $("#op2").prop("disabled", true);
            $("#op3").prop("disabled", true);
            $("#op4").prop("disabled", true);
        
        })
        document.getElementById("op3").innerText = questionsArray[1].options[2];
        $("#op3").click( function() {
            timeLeft -= 10;
            document.getElementById("result").innerText = userScore + "/10 Correct";
            $(this).css({
                background: '#BF3325'  
            });
            $("#op1").prop("disabled", true);
            $("#op2").prop("disabled", true);
            $("#op3").prop("disabled", true);
            $("#op4").prop("disabled", true);
         
        })
        document.getElementById("op4").innerText = questionsArray[1].options[3];
        $("#op4").click( function() {
            userScore += 1;
            document.getElementById("result").innerText = userScore + "/10 Correct";
            $(this).css({
                background: 'green'  
            });
            $("#op1").prop("disabled", true);
            $("#op2").prop("disabled", true);
            $("#op3").prop("disabled", true);
            $("#op4").prop("disabled", true);
        })
    });
        $(".next-button").click( function() {
            document.getElementById("question").innerText = questionsArray[2].question;
            document.getElementById("op1").innerText = questionsArray[2].options[0]
            document.getElementById("op2").innerText = questionsArray[2].options[1]
            document.getElementById("op3").innerText = questionsArray[2].options[2]
            document.getElementById("op4").innerText = questionsArray[2].options[3]
            $("#op1").prop("disabled", false);
            $("#op2").prop("disabled", false);
            $("#op3").prop("disabled", false);
            $("#op4").prop("disabled", false);
            $("#op1").css({
                background: "#bfcacbef"});
            $("#op2").css({
                background: "#bfcacbef"});
            $("#op3").css({
                background: "#bfcacbef"});
            $("#op4").css({
                background: "#bfcacbef"});
            });
    });
// timer function continues      
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
//out of time||play again
    timeLeft -= 1;
        if (timeLeft === -2) {
         var tryAgain = confirm("Time has expired for this attempt.  You answered " + userScore + " correct!  Try Again?");
        if (tryAgain === true) {
             location.reload();
        } else {
             location.href="https://google.com";
        }
    
    }         
}, 1000);






