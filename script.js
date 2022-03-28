var timerEL = document.getElementById("countdown");

// function countdown() {
    var secondsLeft = 90;

    var timeInterval = setInterval(function () {
        // if (secondsLeft > 1) {
        //     timerEL.textContent = secondsLeft + ' secs';
            secondsLeft--;
            timerEL.textContent = secondsLeft;
            if(secondsLeft <= 0)
        // } else if (secondsLeft === 1) {
        //     timerEL.textContent = secondsLeft + 'sec';
        //     secondsLeft--;
        // } else {
        //   timerEL.textContent = '';
          
          clearInterval(timeInterval);
        }, 1000);
    

    console.log(countdown);
