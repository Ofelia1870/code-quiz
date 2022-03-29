var timerEL = document.getElementById("countdown");

var startButton = document.querySelector(".start-quiz-button");


    // document.querySelector("#quiz-section").style.display = "none";

    // document.querySelector(".start-quiz-button").onclick = function() {
    //     document.querySelector("#quiz-section").style.display = "flex";
    //     document.querySelector(".container").style.display = "none";

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
           
    


