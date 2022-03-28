var timerEL = document.getElementById('countdown');

function countdown() {
    var secondsLeft = 90;

    var timeInterval = setInterval(function() {
        if (secondsLeft > 1) {
            timerEL.textContent = secondsLeft + ' secs';
            secondsLeft--;
        } else if (secondsLeft === 1) {
            timerEL.textContent = secondsLeft + 'sec';
            secondsLeft--;
        // } else {
        //   timerEL.textContent = '';
          
        //   clearInterval(timeInterval);

            }
        }, 1000);
    }
