export default function WeatherInfo( {weather} ) {
  return (
    <div className="main-info" style={
      {
        backgroundImage: `url(https://www.thecityofldn.com/wp-content/uploads/2023/05/jamiesmithphoto-2162-Tower-Bridge-with-City-behind-reduced-2000x1334.jpg)`
      }
    }>
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
