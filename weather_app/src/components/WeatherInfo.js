export default function WeatherInfo( {weather} ) {
  return (
    <div className="main-info">
      <div className="city">{weather.request.query}</div>
      <div className="current-weather">
        <div className="tempeture">{weather.current.temperature}°</div>
        <div className="description">
          {weather.current.weather_descriptions}
        </div>
      </div>
    </div>
  )
}
