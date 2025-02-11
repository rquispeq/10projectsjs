'use client'

import Skeleton from "react-loading-skeleton"

export default function WeatherInfo({ weather, city }) {
  return (
    <div
      className="main-info"
      style={{
        backgroundImage: `url(/city-background/background1-min.jpg)`,
      }}
    >
      <div className="city">{city || <Skeleton width={170}/>}</div>
      <div className="current-weather">
        <div className="tempeture">{ weather && weather?.data?.temp + "°" || <Skeleton width={100}/>}</div>
        <div className="description">{weather?.data?.weather?.description || <Skeleton width={100}/>}</div>
      </div>
    </div>
  )
}
