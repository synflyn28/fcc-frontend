//This is the main body to my FreeCodeCamp Twitch.tv application. This contains
//the Global variables and API call that sees whether a streamer is a valid
//Twitch user.
//- Justin Lynn Reid 3/9/2016

//List of streamers to add to the table
var streamers = [
  "freecodecamp", "brunofin",
  "terakilobyte", "habathcx",
  "RobotCaleb","razer_esports",
  "jacksepticeye","ESL_SC2",
  "Markiplier", "comster404"
];

$(document).ready(function(){
  //Iterate through each streamer and add a table record for each if a valid
  //Twitch user. If not add an invalid streamer record
  $.each(streamers, function(index, streamer){
    var metaRequest = 'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=';
    $.getJSON(metaRequest, function(metadata){
      var invalidMsg = "Channel '"+streamer+"' is not available on Twitch";

      //Render the row if the streamer is either an invalid or valid user
      if (metadata.message === invalidMsg){
          addInvalidUser(streamer);
      }
      else {
        addRecord(streamer, metadata);
      }
    });
  });
});