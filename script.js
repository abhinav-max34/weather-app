// Replace with your own OpenWeatherMap API key
let apiKey = "fdb8124c26cdbfb5df776b72294d945d";

function getWeather() {
    let city = document.getElementById("city").value;

    let link = "https://api.openweathermap.org/data/2.5/weather?q=" 
               + city + "&appid=" + apiKey + "&units=metric";

    fetch(link)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML =
        "City: " + city + "<br>" +
        "Temperature: " + data.main.temp + " C<br>" +
        "Weather: " + data.weather[0].main + "<br>" +
        "Humidity: " + data.main.humidity + "%<br>" +
        "Wind Speed: " + data.wind.speed + " m/s<br>" +
        "<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>";
    })
    .catch(() => {
        document.getElementById("result").innerHTML = "City not found";
    });
}

// Show sample 1-month temperature
function showMonthlyTemp() {
    document.getElementById("monthly").innerHTML =
    "<strong>Average Temperature (Last 30 Days)</strong><br>" +
    "Week 1: 28°C<br>" +
    "Week 2: 30°C<br>" +
    "Week 3: 32°C<br>" +
    "Week 4: 31°C";
}




