
 const getLocalInfo = () => {
    $.getJSON("http://ip-api.com/json", function(data) {
      displayLocalInfo(data);
    });
  }
  const getWeatherInfo = (lat, lon) => {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + units + "&appid=94c6c066e2c60884ba110e3a2760a261",
        success: displayWeather,
        error: function err(err){
          console.log(err);
        }

        });
    }
