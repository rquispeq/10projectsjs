import LocationForm from '@/components/LocationForm'
import ChangeLocationButton from '@/components/LocationForm'
import WeatherForecast from '@/components/WeatherForecast'
import WeatherInfo from '@/components/WeatherInfo'
import { getWeather } from '@/lib/getWeather'
import Image from 'next/image'

export default async function Home() {
  const {
     weatherData, forecastData 
  } = await getWeather("Lima")


  return (
    <div className="container">
      <WeatherInfo weather={weatherData}/>
      <WeatherForecast forecast={forecastData} />
      <LocationForm />
    </div>
  )
}
