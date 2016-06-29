//This controller handles when a user is found not to be a valid
//Twitch user and adds a null value to the table

//Justin Lynn Reid 6/16/2016

function addInvalidUser(streamer) {

  //Create Row and status elements and create the default invalid
  //user status message
  var userRow = document.createElement("tr");
  var statusTD = document.createElement("td");
  statusTD.className = "status";
  statusTD.innerHTML = "User Isn't Valid";
  userRow.className = "offline";

  //Create the default missing user null avatar (Twitch logo)
  var imgTD = document.createElement("td");
  imgTD.className = "img";
  var nullAvatar = document.createElement("IMG");
  nullAvatar.className = "null-img";
  var imgURL = "https://encrypted-tbn0.gstatic.com/images?";
  imgURL += "q=tbn:ANd9GcTX2JmcKl4hMSmC0Xq3ltshkGDOGZYWeLcBMEUAfkIv0GKXcDvmbdebgA";
  nullAvatar.src = imgURL;
  $(imgTD).append(nullAvatar);
  $(userRow).append(imgTD);

  //Add the default invalid user link (hash sign) and also add the default
  //status message
  var userTD = document.createElement("td");
  var userLink = document.createElement("a");
  userTD.className = "user";
  userLink.href = "#";
  userLink.innerHTML = streamer;
  userLink.target = "_blank"; //Link opens in new tab by default
  $(userTD).append(userLink);
  $(userRow).append(userTD);
  $(userRow).append(statusTD);

  //**Append the row to the table
  $("#streamers").append(userRow);
}
