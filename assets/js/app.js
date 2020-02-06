let object = {
  "location": {
    "name": "Mission Viejo",
    "region": "California",
    "country": "United States of America",
    "lat": 33.6,
    "lon": -117.67,
    "tz_id": "America/Los_Angeles",
    "localtime_epoch": 1581013545,
    "localtime": "2020-02-06 10:25"
  },
  "current": {
    "last_updated": "2020-02-06 10:30",
    "temp_f": 60.1,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 0.0,
    "humidity": 36,
    "cloud": 25,
    "feelslike_f": 60.1,
    "vis_miles": 9.0,
    "uv": 5.0,
    "gust_mph": 4.5
  },
  "forecast": {
    "forecastday": [
      {
        "date": "2020-02-06",
        "day": {
          "maxtemp_f": 61.7,
          "mintemp_f": 50.4,
          "avgtemp_f": 56.3,
          "avghumidity": 50.0,
          "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
          },
          "uv": 4.2
        },
        "astro": {

        }
      }
    ]
  },
  "alert": {

  }
}
// let searchText = $('#Search').val()
// $.getJSON(`https://api.weatherapi.com/v1/forecast.json?key=feb197890533467b888181650200502&q=${searchText}&days=5`)
//   .then(r => r.json())
//   .then(data => {
// for (let i = 0; i < 40; i++){
//   const location = location[0]  
//   const current = data.current[0]
//   const forecast = data.forecast.forecastday[0]


$(document).ready(function () {
  let location = {}
  $("#Lookup").on('click', function (event) {
    event.preventDefault()
    let inputCity = $("#Search").val();
    $.getJSON("https://api.weatherapi.com/v1/forecast.json?key=feb197890533467b888181650200502&q=" + inputCity + "&days=" + 5)
      .then(({ current, location, forecast }) => {
        console.log(location.name)
        console.log(location.localtime)
        console.log(current.condition.icon)
        // console.log(forecast.forecastday)
        $('#City').text(location.name)
        $('#Temp').text(current.temp_f)
        $('#Humi').text(current.humidity)
        $('#Wind').text(current.wind_mph)
        $('#Time').text(location.localtime)
        $('#UV').text(current.uv)
        $('#Icon').html(`<img src='https:${current.condition.icon}' alt='${location.name}'></img>`)
        $("#searchResult").html(`
<h4>5 Day Forecast:</h4>
  <div class="row">
    <div class="col-m-2">
      <div class="card">
        <div class="card-body">
          <h4 id="" class="card-title">Date: ${forecast.forecastday[0].date}</h4>
          <div class="card-image">
            <img src="https:${forecast.forecastday[0].day.condition.icon}" alt="${location.name}">
          </div>
            <p id="">Conditions: ${forecast.forecastday[0].day.condition.text}</p>
            <p id="">High: ${forecast.forecastday[0].day.maxtemp_f}</p>
            <p id="">Low: ${forecast.forecastday[0].day.mintemp_f}</p>
            <p id="humiditiy">UV: ${forecast.forecastday[0].day.uv}</p>
          </div>
        </div>
      </div>
    <div class="col-m-2">
      <div class="card">
        <div class="card-body">
          <h4 id="" class="card-title">Date: ${forecast.forecastday[1].date}</h4>
          <div class="card-image">
            <img src="https:${forecast.forecastday[1].day.condition.icon}" alt="${location.name}">
          </div>
            <p id="">Conditions: ${forecast.forecastday[1].day.condition.text}</p>
            <p id="">High: ${forecast.forecastday[1].day.maxtemp_f}</p>
            <p id="">Low: ${forecast.forecastday[1].day.mintemp_f}</p>
            <p id="humiditiy">UV: ${forecast.forecastday[1].day.uv}</p>
          </div>
        </div>
      </div>
    <div class="col-m-2">
      <div class="card">
        <div class="card-body">
          <h4 id="" class="card-title">Date: ${forecast.forecastday[2].date}</h4>
          <div class="card-image">
            <img src="https:${forecast.forecastday[2].day.condition.icon}" alt="${location.name}">
          </div>
            <p id="">Conditions: ${forecast.forecastday[2].day.condition.text}</p>
            <p id="">High: ${forecast.forecastday[2].day.maxtemp_f}</p>
            <p id="">Low: ${forecast.forecastday[2].day.mintemp_f}</p>
            <p id="humiditiy">UV: ${forecast.forecastday[2].day.uv}</p>
          </div>
        </div>
      </div>
    <div class="col-m-2">
      <div class="card">
        <div class="card-body">
          <h4 id="" class="card-title">Date: ${forecast.forecastday[3].date}</h4>
          <div class="card-image">
            <img src="https:${forecast.forecastday[3].day.condition.icon}" alt="${location.name}">
          </div>
            <p id="">Conditions: ${forecast.forecastday[3].day.condition.text}</p>
            <p id="">High: ${forecast.forecastday[3].day.maxtemp_f}</p>
            <p id="">Low: ${forecast.forecastday[3].day.mintemp_f}</p>
            <p id="humiditiy">UV: ${forecast.forecastday[3].day.uv}</p>
          </div>
        </div>
      </div>
    <div class="col-m-2">
      <div class="card">
        <div class="card-body">
          <h4 id="" class="card-title">Date: ${forecast.forecastday[4].date}</h4>
          <div class="card-image">
            <img src="https:${forecast.forecastday[4].day.condition.icon}" alt="${location.name}">
          </div>
            <p id="">Conditions: ${forecast.forecastday[4].day.condition.text}</p>
            <p id="">High: ${forecast.forecastday[4].day.maxtemp_f}</p>
            <p id="">Low: ${forecast.forecastday[4].day.mintemp_f}</p>
            <p id="humiditiy">UV: ${forecast.forecastday[4].day.uv}</p>
          </div>
        </div>
      </div>
    </div>`)
      })
  })
})