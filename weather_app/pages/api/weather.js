export default async function handler(req, res) {
  const { city } = req.query

  const weatherRes = await fetch(
    'http://api.weatherstack.com/current?access_key=' +
      process.env.WEATHERSTACK_API_KEY +
      '&query=' +
      city
  )

  const forecastRes = await fetch(
    `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHERBIT_API_KEY}&city=${city}&days=6`
  )
  if (!weatherRes.ok || !forecastRes.ok) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
  const weatherData = await weatherRes.json()

  const forecastData = await forecastRes.json()
  forecastData.data.shift() // Quitamos el primer día

  res.status(200).json({ weatherData, forecastData })
}
