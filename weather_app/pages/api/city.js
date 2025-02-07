export default async function handler(req, res) {
  const city = req.query.name

  const cityRes = await fetch(
    `http://api.geonames.org/searchJSON?name=${city}&maxRows=25&orderby=[relevance,population]&username=${process.env.CITY_API_USERNAME}`
  )

  if (!cityRes.ok) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  }

  const cityData = await cityRes.json()

  return res.json(cityData)
}
