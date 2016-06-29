//Jquery code to get quote from forismatic api
//Justin Lynn Reid 9/30/2015

$(document).ready(function () {
  $("button").click(function () {
    //Get JSON data and create p element from the author and text attributes of said data
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (data) {
      $("p").remove();
      $(".twitter-share-button").remove();
      var quoteText = data.quoteText + " - " + data.quoteAuthor;
      $("body").append("<p class=\"text-center\">" + quoteText + "</p>");
    });
  });
});
