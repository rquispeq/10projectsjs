'use client'
import { getWeather } from '@/lib/getWeather'
import { createContext, useEffect, useState } from 'react'

export const WeatherContext = createContext(null)

export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [city, setCity] = useState(null)
  // Función para actualizar el clima cuando cambia la ciudad
  const fetchWeather = async (newCity) => {
    console.log('getting weather data for', newCity)
    // const { weatherData, forecastData } = await getWeather(newCity);
    const res = await fetch(`api/weather?city=${newCity}`)
    if (!res.ok) throw new Error('Failed to fetch weather data')
    const { weatherData, forecastData } = await res.json()
    console.log('weatherData after fetch in fetchWeather', weatherData,res)
    setWeatherData(weatherData)
    setForecastData(forecastData)
    setCity(newCity)
  }

  // Cargar datos iniciales
  useEffect(() => {
    console.log("getting initial weather data")
    fetchWeather("Lima");
  }, []);
  return (
    <WeatherContext.Provider
      value={{ weatherData, forecastData, city, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
