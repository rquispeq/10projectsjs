import Image from 'next/image'

export default async function Home() {
  const weatherResponse = await fetch(
    'http://api.weatherstack.com/current?access_key='+process.env.WEATHERSTACK_API_KEY+'&query=Lima'
  )

  const forecastResponse = await fetch(
    'http://api.weatherbit.io/v2.0/forecast/daily?key='+process.env.WEATHERBIT_API_KEY+'&city=Lima&days=6'
  )

  const forecastData = await forecastResponse.json()
  const weatherData = await weatherResponse.json()
  forecastData.data.shift()
  return (
    <div className="container">
      <div className="main-info">
        <div className="city">{weatherData.request.query}</div>
        <div className="current-weather">
          <div className="tempeture">{weatherData.current.temperature}°</div>
          <div className="description">
            {weatherData.current.weather_descriptions}
          </div>
        </div>
      </div>
      <div className="extra-info">
        {forecastData.data.map((day, index) => {
          const date = new Date(day.datetime + 'T00:00:00-05:00')
          const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
          return (
            <div key={index} className="weather-day">
              <div className="day-name">{dayName}</div>
              <div className="tempeture">{Math.round(day.temp)}°</div>
              <Image
                alt="weather-icon"
                className="weather-icon"
                src={
                  'https://cdn.weatherbit.io/static/img/icons/' +
                  day.weather.icon +
                  '.png'
                }
                width={60}
                height={60}
              />
            </div>
          )
        })}
      </div>
      <button type="button" className="change-location">
        change location
      </button>
    </div>
  )
}
