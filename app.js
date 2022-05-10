function result() {
    let city = document.querySelector("#city").value;

    var request = new XMLHttpRequest();

    request.open(
        "GET",
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=93f26e3c57081a6210de53b8dcfdfea4",
        true
    );

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            let imgname = data.weather[0].icon + ".png";
            console.log(data);
            document.getElementById("weather").innerHTML =
                data.weather[0].description;
            document.getElementById("weather").style.color = "black";
            document.getElementById("temper").innerHTML = `${(
                data.main.temp - 273.37
            ).toFixed(2)}°C`;
            document.getElementById("location").innerHTML =
                city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
            document.getElementById("location").style.color = "black";
            document.getElementById("weather-img").src =
                "https://openweathermap.org/img/w/" + imgname;
        } else {
            console.log(" there was an error");
        }
    };

    request.send();
}
