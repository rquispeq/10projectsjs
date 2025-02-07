"use client";

import { useState } from "react";

export default function LocationForm() {
  const [isOpen, setOpen] = useState(false)
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
