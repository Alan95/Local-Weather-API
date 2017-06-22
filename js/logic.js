
const displayLocalInfo = (data) => {

  let results = JSON.parse(JSON.stringify(data));
  lat = results.lat;
  lon = results.lon;
  let city = results.city;
  $("#location").text(city);
  getWeatherInfo(lat, lon);
}

const displayWeather = (data) => {

  let stringified = JSON.stringify(data);
  let results = JSON.parse(stringified);
  console.log(data);
  temperature = results.main.temp;
  unitsChecker(temperature);

  description1 = results.weather[0].description;
  icon = results.weather[0].icon;
  id = results.weather[0].id;
  iconURL = "https://cors.5apps.com/?uri=http://openweathermap.org/img/w/" + icon + ".png";

  $("#icon").attr("src", iconURL);
  $("#description").text(description1);
  images(id);
}

const images = (ids) =>  {

    imgur = ['url("http://s.hswstatic.com/gif/thunderstorm-orig.jpg")', 'url("https://c1.staticflickr.com/8/7393/11375147803_0f453d8676_b.jpg")', 'url("http://static.temblor.net/wp-content/uploads/2017/03/rain.jpg")', 'url("http://media.nbcphiladelphia.com/images/1200*675/Snow-Flurries-Generic.jpg")', 'url("https://i.ytimg.com/vi/x9NQZX8pogw/maxresdefault.jpg")', 'url("https://onceuponatimeblog.weebly.com/uploads/5/8/3/1/5831762/474426177_orig.jpg?248")', 'url("http://vignette3.wikia.nocookie.net/phobia/images/5/53/Clouds.jpg/revision/latest?cb=20170123161554")', 'url("http://digitalphotographysecrets.com/wp-content/uploads/2012/02/591139_19425673.jpg")'];

    if (ids < 300) {

        $("body").css("background-image", imgur[0]);
    } else if (id < 400) {

        $("body").css("background-image", imgur[1]);
    } else if (id < 600) {

        $("body").css("background-image", imgur[2]);
    } else if (id < 700) {

        $("body").css("background-image", imgur[3]);
    } else if (id < 800) {

        $("body").css("background-image", imgur[4]);
    } else if (id == 800) {
        $("body").css("background-image", imgur[5]);
    } else if (id < 900) {
        $("body").css("background-image", imgur[6]);
    } else {
        $("body").css("background-image", imgur[7]);
    }

}
