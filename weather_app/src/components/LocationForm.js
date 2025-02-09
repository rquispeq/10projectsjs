'use client'

import { WeatherContext } from '@/context/WeatherContext'
import { useContext, useRef, useState } from 'react'

export default function LocationForm() {
  const [isOpen, setOpen] = useState(false)

  const [cities, setCities] = useState([])

  const {fetchWeather} = useContext(WeatherContext)

  const inputSearchRef = useRef(null)

  const handlerSubmit = async function (e) {
    e.preventDefault()
    const cityName = e.target.txt_search.value
    const cityRes = await fetch('api/city?name=' + cityName)
    const cityData = await cityRes.json()

    cityData.geonames = cityData.geonames.filter((city) => {
      return city.name.includes(cityName) && city.fclName.includes('city')
    })
    setCities(cityData.geonames)
  }

  const handlerChangeLocation = (city) => {
    setOpen(false)
    setCities([])
    inputSearchRef.current.value = ''
    fetchWeather(city.name)
    // setWeatherData(88888)
  }

  return (
    <>
      <button
        type="button"
        className="change-location"
        onClick={() => setOpen(true)}
      >
        change location
      </button>

      {
        <form
          className={'form_search ' + (isOpen ? 'active' : '')}
          onSubmit={handlerSubmit}
        >
          <input
            ref={inputSearchRef}
            name="txt_search"
            className="txt_search"
            type="text"
            placeholder="Buscar ciudad"
          />
          <button type="submit">Buscar</button>
          <button
            className="close_search"
            type="button"
            onClick={() => setOpen(false)}
          >
            x
          </button>

          {cities.length > 0 && (
            <div className="city-list">
              <ul>
                {cities.map((city, index) => (
                  <li key={index} onClick={() => handlerChangeLocation(city)}>
                    {city.name}, {city.adminName1}, {city.countryName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      }
    </>
  )
}
