'use client'
import { WeatherContext } from '@/context/WeatherContext'
import { useContext } from 'react'

export default function WeatherInfo({ weather, city }) {
  // const {weatherData, setWeatherData} = useContext(WeatherContext)
  // console.log('WeatherInfo using WeatherContext', weatherData)
  console.log('WeatherInfo', weather)
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
