export async function getWeather(city) {
  console.log("api_url",process.env.API_URL)
  const res = await fetch(`${process.env.API_URL}api/weather?city=${city}`)
  if (!res.ok) throw new Error('Failed to fetch weather data')
  return res.json()
}
