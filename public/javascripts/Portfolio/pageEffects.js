//Contains effects for professional profile page
//Justin Lynn Reid - 9/9/2015

$(document).ready(function () {
  //Button hover and navbar event handlers
  $(".nav.navbar-nav.navbar-right li").mouseenter(function (){
    $(this).css("text-decoration", "underline");
  });
  $(".nav.navbar-nav.navbar-right li").mouseleave(function (){
    $(this).css("text-decoration", "none");
  });
  $("button").mouseenter(function () {
    $(this).css("background-color", "#EEEEEE");
    $(this).css("color", "#222222");
  });
  $("button").mouseleave(function () {
    $(this).css({"background-color": "transparent", "color": "#EEEEEE"});
  });
  //Button link click handlers
  $("#twitter").click(function(){
    window.open("http://www.twitter.com/synflyn28", '_blank');
  });
  $("#lnkin").click(function(){
    window.open("https://www.linkedin.com/in/justinreid28","_blank");
  });
  $("#github").click(function(){
    window.open("https://github.com/synflyn28", "_blank");
  });
  $("#cdpen").click(function(){
    window.open("http://codepen.io/synflyn28/public", "_blank");
  });
});
