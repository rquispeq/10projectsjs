'use client'

import { WeatherContext } from '@/context/WeatherContext'
import { useContext, useRef, useState } from 'react'

export default function LocationForm() {
  const [isOpen, setOpen] = useState(false)

  const [cities, setCities] = useState([])

  const { fetchWeather } = useContext(WeatherContext)

  const inputSearchRef = useRef(null)

  const handlerSubmit = async function (e) {
    e.preventDefault()
    // capitalize first letter
    const cityName = e.target.txt_search.value.charAt(0).toUpperCase() + e.target.txt_search.value.slice(1)
    const cityRes = await fetch('api/city?name=' + cityName)
    const cityData = await cityRes.json()

    cityData.geonames = cityData.geonames.filter((city) => {
      return city.name.includes(cityName) && city.fclName.includes('city')
    })
    setCities(cityData.geonames)
  }

  const handlerChangeLocation = (lat, lon, name, adminName1, countryName) => {
    setOpen(false)
    setCities([])
    inputSearchRef.current.value = ''
    fetchWeather(lat, lon, name, adminName1, countryName)
    // setWeatherData(88888)
  }

  return (
    <>
      <button
        type="button"
        className="change-location"
        onClick={() => setOpen(true)}
      >
        <i className="fa-solid fa-city"></i> 
          Change location
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
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button
            className="close_search"
            type="button"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {cities.length > 0 && (
            <div className="city-list">
              <ul>
                {cities.map((city, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handlerChangeLocation(
                        city.lat,
                        city.lng,
                        city.name,
                        city.adminName1,
                        city.countryName
                      )
                    }
                  >
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
