var timerEL = document.getElementById("countdown");

var startButton = document.querySelector(".start-quiz-button");

var h3El = document.createElement("h3")

// console.log(startButton);

    function startQuiz() {
        document.querySelector(".container").innerHTML =  "Question 1";
        //  document.querySelector(".container").innerHTML = h3El;
        //  h3El.textContent = "Question 1";
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
           
    


