import Weathercontainer from '@/components/WeatherContainer'
import WeatherProvider from '@/context/WeatherContext'

export default async function Home() {
  return (
    <WeatherProvider>
      <Weathercontainer  />
    </WeatherProvider>
  )
}
