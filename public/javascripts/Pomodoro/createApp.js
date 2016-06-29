//This controller adds a streamer row to the table by receiving data
//from the twitch.tv streamer API. It also checks to see whether the
//streamer is also streaming and changes the table record's classes and
//content based from that information.

//- Justin Lynn Reid 6/16/2016

function addRecord(streamer, metadata) {

  //Create new table row DOM object and streamer status TD element
  var userRow = document.createElement("tr");
  var statusTD = document.createElement("td");
  statusTD.className = "status";

  var request = 'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=';

  //Request stream data to see if the channel is streaming or not
  $.getJSON(request, function(data){

    //Render the stream status if the user is currently streaming on
    //Twitch.tv. If not render "offline" message in the table
    if (data.stream !== null) {
      userRow.className = "streaming";
      statusTD.innerHTML = data.stream.channel.game +
      ": "+data.stream.channel.status + " ";
    }
    else {
      userRow.className = "offline";
      statusTD.innerHTML = "Offline";
    }

    //Render user avatar in this record. If the user doesn't have an avatar
    //then use default Twitch logo
    var imgTD = document.createElement("td");
    imgTD.className = "img";

    if (metadata.logo !== null) {
      var userImg = document.createElement("IMG");
      userImg.src = metadata.logo;
      $(imgTD).append(userImg);
    }
    else {
      var nullAvatar = document.createElement("IMG");
      nullAvatar.className = "null-img";
      var imgURL = "https://encrypted-tbn0.gstatic.com/images?";
      imgURL += "q=tbn:ANd9GcTX2JmcKl4hMSmC0Xq3ltshkGDOGZYWeLcBMEUAfkIv0GKXcDvmbdebgA";
      nullAvatar.src = imgURL;
      $(imgTD).append(nullAvatar);
    }
    $(userRow).append(imgTD);

    //Create and link to streamer's Twitch channel and both that link and
    //the user's status to this row
    var userTD = document.createElement("td");
    var userLink = document.createElement("a");
    userTD.className = "user";
    userLink.href = metadata.url;
    userLink.innerHTML = streamer;
    userLink.target = "_blank"; //Link opens in new tab by default
    $(userTD).append(userLink);
    $(userRow).append(userTD);
    $(userRow).append(statusTD);

    //**Add the row to the table**
    $("#streamers").append(userRow);
  });
}
