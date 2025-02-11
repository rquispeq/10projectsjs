import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

export default function WeatherForecast({ forecast }) {
  return (
    <div className="extra-info">
      {forecast
        ? forecast?.data?.map((day, index) => {
            const date = new Date(day.datetime + 'T00:00:00-05:00')
            const dayName = date.toLocaleDateString('en-US', {
              weekday: 'long',
            })
            return (
              <div key={index} className="weather-day">
                <div className="day-name">{dayName}</div>
                <div className="tempeture">{Math.round(day.temp)}°</div>
                <Image
                  alt="weather-icon"
                  className="weather-icon"
                  src={
                    'https://cdn.weatherbit.io/static/img/icons/' +
                    day.weather.icon +
                    '.png'
                  }
                  width={60}
                  height={60}
                />
              </div>
            )
          })
        : Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="weather-day">
              <div className="day-name">
                <Skeleton width={100} height={20} />
              </div>
              <div className="tempeture">
                <Skeleton width={30} height={20} />
              </div>
              <div className="weather-icon">
                <Skeleton width={60} height={60} />
              </div>
            </div>
          ))}
    </div>
  )
}
