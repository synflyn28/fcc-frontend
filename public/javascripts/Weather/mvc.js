/*
This module contains the MVC code for my attempt at FreeCodeCamp's Local
Weather Zipline.

- Justin Lynn Reid 10/5/2015
*/
var app = angular.module("weather-app", []);

app.controller("obController", ['$http', function($http) {
  this.meas = 'Fahrenheit';
  this.bgImg= '';
  var ob = this;

  //Method for setting changing display temperature value in Celsius
  this.setMeasure = function(meas) {
    this.meas = meas;
  };

  //Method for setting background image URL based on temperature
  this.setBackground = function (tempK) {
    var tempF = 9/5 * (tempK - 273.15) + 32.0;
    if (tempF <= 32.0) {
      ob.bgImg = 'https://c2.staticflickr.com/6/5679/22016510062_d1f059f246_c.jpg';
    }
    else if (tempF > 32.0 && tempF <= 50.0) {
      ob.bgImg = 'https://c2.staticflickr.com/6/5812/21406032584_086f58ceee_c.jpg';
    }
    else if (tempF > 50.0 && tempF <= 80.0) {
      ob.bgImg = 'https://c2.staticflickr.com/6/5630/21407680993_3594a14674_c.jpg';
    }
    else {
      ob.bgImg = 'https://c2.staticflickr.com/6/5762/21841001998_31837aec4a_c.jpg';
    }
  };

  //Get Lat/Lon pair from current IP address
  $http.get('http://ipinfo.io/json').success(function(data){
    ob.latlon = data.loc.split(",");
    var req = 'http://api.openweathermap.org/data/2.5/weather?lat=';
    req += ob.latlon[0]+'&lon='+ob.latlon[1];
    req += '&APPID=b748139ba2b08838a95bb62a3c7aa67d';

    //Get current Ob from Lat/Lon Info
    $http.get(req).success(function(latestOb){
      ob.data = latestOb;
      ob.setBackground(latestOb.main.temp);
    });
  });
}]);
