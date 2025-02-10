'use client'
import { getWeather } from '@/lib/getWeather'
import { createContext, useEffect, useState } from 'react'

export const WeatherContext = createContext(null)

export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [city, setCity] = useState(null)
  // Función para actualizar el clima cuando cambia la ciudad
  const fetchWeather = async (lat, lon, name, adminName1, countryName) => {
    // const { weatherData, forecastData } = await getWeather(newCity);
    const city = `${name}, ${adminName1}, ${countryName}`
    const res = await fetch(`api/weather?lat=${lat}&lon=${lon}`)
    if (!res.ok) throw new Error('Failed to fetch weather data')
    const { weatherData, forecastData } = await res.json()
    setWeatherData(weatherData)
    setForecastData(forecastData)
    setCity(city)
  }

  // Cargar datos iniciales
  useEffect(() => {
    // lattide and longitude of Lima
    const name = 'Lima'
    const adminName1 = 'Lima Province'
    const countryName = 'Peru'
    const lat = -12.04318
    const lon = -77.02824
    fetchWeather(lat, lon, name, adminName1, countryName)
  }, [])
  return (
    <WeatherContext.Provider
      value={{ weatherData, forecastData, city, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
