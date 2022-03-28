var timerEL = document.getElementById("countdown");

var startButton = document.querySelector(".start-quiz-button");

function question(text, choices) {
    this.text = text;
    this.choices =choices
}

// var h3El = document.createElement("h3")
var codeQuestion =  [
    new question("question1", ["answerA", "answerB"])
]


// console.log(startButton);

    function startQuiz() {
        document.querySelector(".container").innerHTML =  codeQuestion;
        //  document.querySelector(".container").innerHTML = h3El;
        //  h3El.textContent = "Question 1";
    }

    startButton.addEventListener("click", function(){
        var secondsLeft = 90;
        

        var timeInterval = setInterval(function () {
        
            secondsLeft--;
            timerEL.textContent = secondsLeft;
    
            if(secondsLeft === 0) {
              alert("Game Over!! You ran out of time.")

            clearInterval(timeInterval);
          }
        }, 1000);

    startButton.addEventListener("click", startQuiz)
        
    });
           
    


