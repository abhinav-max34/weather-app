let apiKey = "fdb8124c26cdbfb5df776b72294d945d";

function getWeather() {
    let city = document.getElementById("city").value.trim();

    if (city === "") {
        document.getElementById("result").innerHTML = "Please enter a city name";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("result").innerHTML = "City not found";
                return;
            }

            document.getElementById("result").innerHTML =
                "City: " + data.name + "<br>" +
                "Temperature: " + data.main.temp + " °C<br>" +
                "Weather: " + data.weather[0].main + "<br>" +
                "Humidity: " + data.main.humidity + "%<br>" +
                "<img src='https://openweathermap.org/img/wn/" +
                data.weather[0].icon + "@2x.png'>";
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "Error loading data";
        });
}







