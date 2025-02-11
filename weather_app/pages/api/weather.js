export default async function handler(req, res) {
  const { lat, lon } = req.query

  const forecastRes = await fetch(
    `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHERBIT_API_KEY}&days=6&lat=${lat}&lon=${lon}`
  )
  // if (!weatherRes.ok || !forecastRes.ok) {
  //   return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  // }
  if (!forecastRes.ok) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
  // const weatherData = await weatherRes.json()

  const forecastData = await forecastRes.json()
  const weatherData = {
    city: forecastData.city_name,
    country_code: forecastData.country_code,
    data: forecastData.data[0],
  }

  forecastData.data.shift() // Quitamos el primer día

  res.status(200).json({ weatherData, forecastData })
}
