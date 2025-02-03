export async function getWeather(city) {
  const res = await fetch(`${process.env.API_URL}api/weather?city=${city}`)
  if (!res.ok) throw new Error('Failed to fetch weather data')
  return res.json()
}
