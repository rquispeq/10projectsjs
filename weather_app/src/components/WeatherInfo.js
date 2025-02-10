'use client'

export default function WeatherInfo({ weather, city }) {
  return (
    <div
      className="main-info"
      style={{
        backgroundImage: `url(/city-background/background1.jpg)`,
      }}
    >
      <div className="city">{city}</div>
      <div className="current-weather">
        <div className="tempeture">{weather.data.temp}°</div>
        <div className="description">{weather.data.weather.description}</div>
      </div>
    </div>
  )
}
