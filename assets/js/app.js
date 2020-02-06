fetch('http://api.weatherapi.com/v1/forecast.json?key=feb197890533467b888181650200502&q=mission viejo&days=5')
  .then(r => r.json())
  .then(data => {
    for (let i = 0; i < 40; i++){
      const location = data.location[0]  
      const current = data.current[0]
      const forecast = data.forecast.forecastday[0]
      
      console.log(data) 
      // console.log(location)
      // console.log(current)
      // console.log(forecast)
    }

  })