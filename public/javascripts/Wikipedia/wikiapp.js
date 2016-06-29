//Code for my Wikipedia Search Application
// Justin Lynn Reid 2/13/2016
$(document).ready(function(){

  //State variable for determining if search has been performed
  var searchCompleted = false;

  $("#wikisubmit").click(function(){
    var searchQuery = $("form input").val().replace(" ","%20");
    var reqPrefix = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
    var reqSuffix = "&limit=6&redirects=resolve&callback=?";

    //Search the API for relevant documents related to search text
    $.getJSON(reqPrefix+searchQuery+reqSuffix, function(data){

      //Clear search results from document if previous search was done
      if (searchCompleted) {
        $("#results").empty();
        searchCompleted = false;
      }

      //Search Wikipedia API and Insert a Result div for every entry
      $.each(data[1], function(index, articleTitle){
          $("#results").append('<div class="entry center-block" id="'+index+'">'+"</div>");

          //Do not create a border if there is more than one Wikipedia article
          if (data[1].length > 1){
            $("div#"+index).css("border-bottom", "0px");
          }

          //Get Title and Content
          $("div#"+index).append('<h3 class="text-center article-title">'+articleTitle+'</h3>');
          $("div#"+index).append('<p class="text-center article-content">'+data[2][index]+'</p>');
      });
    });
    searchCompleted = true;
  });
});
