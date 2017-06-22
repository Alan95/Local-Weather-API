let units = 'metric';
let lat, lon, imgur, id, iconURL, icon, description1, temperature;

$(document).ready(function() {

  getLocalInfo(units);

    $(".switcher").click(function changeUnit() {
        if (units === 'imperial') {
            units = 'metric';
            getLocalInfo();

        } else {
            units = 'imperial';
            getLocalInfo();

        }

    })




});

const unitsChecker = (temperature) => {
$("#temperature").text(temperature);
$("#temperature").append(units == 'imperial' ? " F°" : " C°");
}
