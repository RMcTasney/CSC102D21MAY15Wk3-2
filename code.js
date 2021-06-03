// as requested by the fleet admiral to include halfway warning
// Countdown using for loop

// establish function
function startCountdown() {
  //count variable to hold the value of the time remaining
  var count = 10;
  // for loop to iterate through the time in seconds and change the count value accordingly
  for (var i = 0; i < 11; i++) {
    
    // if statement to show blastoff when timer reachers 10
    if (i == 10) {
      setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
      }, i * 1000);

     // else if statement to change line to include half way warning when the timer hits 5 seconds 
    } else if (i > 4) {
      setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML =
          "Warning Less than ½ way to launch, time left = " + count;
      }, i * 1000);

    // esle statment to countdown normally until either of the other if statment conditions are true
    } else {
      setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count--;
      }, i * 1000);
    }
  }
}

