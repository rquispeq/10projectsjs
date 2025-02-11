'use client'

import { WeatherContext } from '@/context/WeatherContext'
import { useContext } from 'react'
import WeatherInfo from './WeatherInfo'
import WeatherForecast from './WeatherForecast'
import LocationForm from './LocationForm'

export default function Weathercontainer() {
  const { weatherData, forecastData, city } = useContext(WeatherContext)
  return (
    <div className="container">
      {<WeatherInfo weather={weatherData} city={city} />}
      {<WeatherForecast forecast={forecastData} />}
      <LocationForm />
    </div>
  )
}
