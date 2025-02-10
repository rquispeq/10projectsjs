'use client'

import { WeatherContext } from '@/context/WeatherContext'
import { useContext } from 'react'
import WeatherInfo from './WeatherInfo'
import WeatherForecast from './WeatherForecast'
import LocationForm from './LocationForm'

export default function Weathercontainer() {
  const { weatherData, forecastData, city } = useContext(WeatherContext)
  console.log('weatherData in Container', weatherData)
  return (
    <div className="container">
      {weatherData && <WeatherInfo weather={weatherData} city={city} />}
      {forecastData && <WeatherForecast forecast={forecastData} />}
      <LocationForm />
    </div>
  )
}
