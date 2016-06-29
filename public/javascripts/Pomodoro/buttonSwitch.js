//This controller handles button clicks on whether to hide streamers
//with a certain status or to refresh the table as a whole

//Justin Lynn Reid 6/16/2016

function handleClick(buttonType) {

  //Fade in and fade out table elements based on assigned streaming status
  switch(buttonType) {
    case "streaming":
      $(".offline").fadeOut("slow");
      $(".streaming").fadeIn("slow");
      break;
      case "offline":
    case "offline":
      $(".streaming").fadeOut("slow");
      $(".offline").fadeIn("slow");
      break;
    case "both":
      $(".streaming, .offline").fadeIn("slow");
      break;
    case "refresh":
      $(".streaming, .offline").remove();

      //Re-render the table
      $.each(streamers, function(index, streamer){
        var metaRequest = 'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=';
        $.getJSON(metaRequest, function(metadata){
          var invalidMsg = "Channel '"+streamer+"' is not available on Twitch";

          //Render the record based on whether the user is valid or not
          if (metadata.message === invalidMsg){
              addInvalidUser(streamer);
          }
          else {
            addRecord(streamer, metadata);
          }
        });
      });
  }
}
