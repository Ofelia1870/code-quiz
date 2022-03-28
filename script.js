var timerEL = document.getElementById("countdown");

var startButton = document.querySelector(".start-quiz-button");

// console.log(startButton);

    function startQuiz() {
         document.querySelector(".container").innerHTML = "Question 1";
    }

    startButton.addEventListener("click", function(){
        var secondsLeft = 90;
        

        var timeInterval = setInterval(function () {
        
            secondsLeft--;
            timerEL.textContent = secondsLeft;
            if(secondsLeft <= 0)
    
          clearInterval(timeInterval);
        }, 1000);

    startButton.addEventListener("click", startQuiz)
        
    });
           
    


