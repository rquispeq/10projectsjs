export default async function handler(req, res) {
  const city = req.query.name

  const cityRes = await fetch(
    `http://api.geonames.org/searchJSON?q=${city}&maxRows=15&username=${process.env.CITY_API_USERNAME}`
  )

  if (!cityRes.ok) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  const cityData = await cityRes.json()

  return res.json(cityData)
}
