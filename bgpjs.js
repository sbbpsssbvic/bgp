//Weather Forecast js

var stormImg = "https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"; //Group 2XX
var drizzleImg = "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"; //Group 3XX
var rainImg = "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"; //Group 5XX
var snowImg = "https://images.pexels.com/photos/289649/pexels-photo-289649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"; //Group 6XX
var atmosphereImg = ""; //Group 7XX
var clearImg = "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"; //Group 800
var cloudyImg = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"; //Group 8X1+

$(document).ready( function () {
  var latitude = 0;
  var longitude = 0;
  function displayWeather(position) {
    latitude = (position.coords.latitude);
    longitude = (position.coords.longitude);
    console.log("Input:\n" + latitude + " " + longitude);
    
    var requestLink = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
    console.log("Query:\n" + requestLink);
    var myNum = false;
    $.get(requestLink, function(data, status){
      if (data.name !="Shuzenji") {//Weather API has a bug that shows this location sometimes
        myNum = true;
        console.log("Data:\n" + data.weather[0].id + " " + data.coord.lat + " " + data.coord.lon + "\nStatus: " + status);

        if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
          document.getElementById("main-container").style.backgroundImage = "url('" + stormImg + "')";
        } else if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
          document.getElementById("main-container").style.backgroundImage = "url('" + drizzleImg + "')";
        } else if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
          document.getElementById("main-container").style.backgroundImage = "url('" + rainImg + "')";     
        } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
          document.getElementById("main-container").style.backgroundImage = "url('" + snowImg + "')";     
        } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
          document.getElementById("main-container").style.backgroundImage = "url('" + atmosphereImg + "')";     
        } else if (data.weather[0].id == 800 ) {
          document.getElementById("main-container").style.backgroundImage = "url('" + clearImg + "')";     
        } else if (data.weather[0].id > 800 && data.weather[0].id < 900) {
          document.getElementById("main-container").style.backgroundImage = "url('" + cloudyImg + "')";     
        }

        $("#location").html(data.name + ", " +  data.sys.country);
        $("#temperature").html( data.main.temp);
        $("#weather-img").html("<img class='small-img' src='" + data.weather[0].icon + "'>");
        console.log("Weather Icon: " + data.weather[0].icon);
        $("#forecast-description").html(data.weather[0].main);
      }
      else {
        console.log("Error: API call failed.");
        window.location.href = window.location.href;
      }
    });
  }
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayWeather);
  } else {
    $("#forecast-box").html("Geolocation is not supported by this browser.");
  }
  
  var toggleButton = document.getElementById("togBtn");
  toggleButton.addEventListener("change", function () {
    if($(toggleButton).prop('checked')){
      var tempFahrenheit = parseFloat($("#temperature").text());
      var tempCelcius = Math.round(100.0 *((tempFahrenheit - 32.0) / (9.0 / 5.0))) / 100.0;
      $("#temperature").html( tempCelcius );
    }
    else {
      var tempCelcius = parseFloat($("#temperature").text());
      var tempFahrenheit = Math.round(100.0 *(tempCelcius * (9.0 / 5.0) + 32.0)) / 100.0;
      $("#temperature").html( tempFahrenheit );
    }
  });
});
