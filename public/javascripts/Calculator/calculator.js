//This file contains the functionality for my basic web
//calculator.

//Justin Lynn Reid 1/16/16

var dispValue = ""; //Expression that the calculator displays
var oper = ""; //Operation that calculator performs
var currValue = ""; //Current value pressed by calculator

$(document).ready(function(){
  //Change display value based on number pressed
  $(".num").click(function(){
    buttonValue = $(this).text();
    currValue += buttonValue;
    dispValue += buttonValue;
    $("#display").text(dispValue);
  });

  //Handle when percent is pressed
  $("#percent").click(function(){
    calcPer = parseFloat(currValue) * 0.01;
    currValue = calcPer.toString();
    var sep = new RegExp('[\/*-+] [0-9]+$');

    if (sep.test(dispValue)) {
      dispValue = dispValue.replace(sep.exec(dispValue), oper + " " + currValue);
    }
    else {
      dispValue = currValue;
    }

    $("#display").text(dispValue);
  });

  //Handle expression evaluation when operator is clicked
  $(".oper").click(function(){
    var currOper = $(this).attr("id");

    //Switch to append operators to display expression string
    switch (currOper) {
      case "add":
        dispValue += " + ";
        oper = "+";
        $("#display").text(dispValue);
        currValue = "";
        break;
      case "sub":
        dispValue += " - ";
        oper = "+";
        $("#display").text(dispValue);
        currValue = "";
        break;
      case "mul":
        dispValue += " * ";
        oper = "*";
        $("#display").text(dispValue);
        currValue = "";
        break;
      case "divide":
        dispValue += " / ";
        oper = "/";
        $("#display").text(dispValue);
        currValue = "";
        break;
    }
  });

  //Handle when equals is pressed
  $("#equals").click(function(){
    var calcValue = 0;
    calcValue = eval(dispValue);
    dispValue = calcValue.toString();
    $("#display").text(dispValue);
    calcValue = 0;
  });

  //Clear calculator when AC or CE is pressed
  $(".delete").click(function(){
    dispValue = "";
    oper = "";
    currValue = "";
    $("#display").text("0");
  });
});
