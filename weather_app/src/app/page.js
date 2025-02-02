import Image from 'next/image'

export default async function Home() {
  const data = await fetch(
    'http://api.weatherstack.com/current?access_key=&query=New York'
  )
  const posts = await data.json()
  console.log('consuming api', posts)
  return (
    <div className="container">
      <div className="main-info">
        <div className="city">London, England</div>
        <div className="current-weather">
          <div className="tempeture">23°</div>
          <div className="description">Cloudy</div>
        </div>
      </div>
      <div className="extra-info">
        <div className="weather-day">
          <div className="day-name">Sunday</div>
          <div className="tempeture">18°</div>
          <div className="weather-icon">icon</div>
        </div>
        <div className="weather-day">
          <div className="day-name">Sunday</div>
          <div className="tempeture">18°</div>
          <div className="weather-icon">icon</div>
        </div>
        <div className="weather-day">
          <div className="day-name">Sunday</div>
          <div className="tempeture">18°</div>
          <div className="weather-icon">icon</div>
        </div>
        <div className="weather-day">
          <div className="day-name">Sunday</div>
          <div className="tempeture">18°</div>
          <div className="weather-icon">icon</div>
        </div>
        <div className="weather-day">
          <div className="day-name">Sunday</div>
          <div className="tempeture">18°</div>
          <div className="weather-icon">icon</div>
        </div>
      </div>
      <button type="button" className="change-location">
        change location
      </button>
    </div>
  )
}
