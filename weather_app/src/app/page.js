import WeatherForecast from '@/components/WeatherForecast'
import WeatherInfo from '@/components/WeatherInfo'
import { getWeather } from '@/lib/getWeather'
import Image from 'next/image'

export default async function Home() {
  const {
     weatherData, forecastData 
  } = await getWeather("Lima")

  console.log("weather in pagejs",weatherData)

  return (
    <div className="container">
      <WeatherInfo weather={weatherData}/>
      <WeatherForecast forecast={forecastData} />
      <button type="button" className="change-location">
        change location
      </button>
    </div>
  )
}
