//This file contains the frontend code for my
//pomodoro clock created for FreeCodeCamp

//1-23-2016 Justin Lynn Reid

$(document).ready(function(){

  //Default countdown value in minutes and state variable to determine
  //whether the clock has been clicked or not
  var countdown = 25;
  var clicked = false;

  //Initial date/time object for time calcuations, minutes set to countdown
  //value
  var time = new Date();
  time.setMinutes(countdown);
  time.setSeconds(0);
  time.setMilliseconds(0);

  //Set start time and increment time to countdown value
  $("#time").append(time.toTimeString().substr(3, 5));
  $("#increment").text(countdown);

  //Customize length of time based on clicks
  $("#add").click(function(){
    countdown++;
    $("#increment").text(countdown);
    time.setMinutes(time.getMinutes() + 1);
    $("#time").text(time.toTimeString().substr(3, 5));
  });

  $("#subtract").click(function(){
    countdown--;
    $("#increment").text(countdown);
    time.setMinutes(time.getMinutes() - 1);
    $("#time").text(time.toTimeString().substr(3, 5));
  });

  //Reset the pomodoro
  $("#reset").click(function(){
    countdown = 25;
    $("#increment").text(countdown);
    time.setMinutes(countdown);
    time.setSeconds(0);
    time.setMilliseconds(0);
    $("#time").text(time.toTimeString().substr(3, 5));
  });

  //Start or stop pomodoro when main circle/div is clicked
  $("#counter").click(function(){
    if (!clicked) {
      clicked = true;

      //Open pomodoro as a JavaScript SetInterval() object
      var interval = setInterval(function(){

        $("#time").text(time.toTimeString().substr(3, 5));
        time.setSeconds(time.getSeconds() - 1);

        if (time.getSeconds() === 0 && time.getMinutes() === 0) {
          clearInterval(interval);
        }
        if (clicked === false) {
          clearInterval(interval);
        }

      }, 1000);

    }

    //Turn off pomodoro interval by setting the clicked value back to false
    else {
      clicked = false;
    }
  });
});
