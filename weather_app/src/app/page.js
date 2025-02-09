import LocationForm from '@/components/LocationForm'
import ChangeLocationButton from '@/components/LocationForm'
import Weathercontainer from '@/components/WeatherContainer'
import WeatherForecast from '@/components/WeatherForecast'
import WeatherInfo from '@/components/WeatherInfo'
import WeatherProvider, { WeatherContext } from '@/context/WeatherContext'
import { getWeather } from '@/lib/getWeather'
import Image from 'next/image'
import { useContext } from 'react'

export default async function Home() {
  // const city = 'Lima'
  // const { weatherData, forecastData } = await getWeather(city)
  // console.log('weatherData', weatherData)
  return (
    <WeatherProvider>
      <Weathercontainer  />
    </WeatherProvider>
  )
}
