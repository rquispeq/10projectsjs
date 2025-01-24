const newYear = (new Date).getFullYear() + 1
const new_year = new Date(newYear + '-01-01 00:00:00')
function countdown() {
    const now = new Date()
    let time_left = new_year - now
    const totalseconds = time_left / 1000
    const minutes = Math.floor(totalseconds / 60 % 60 )
    const hours = Math.floor(totalseconds / 3600 % 24)
    const days = Math.floor(totalseconds / 3600 / 24)
    const seconds = Math.floor(totalseconds % 60)

    const el_days = document.getElementById('days')
    const el_hours = document.getElementById('hours')
    const el_minutes = document.getElementById('minutes')
    const el_seconds = document.getElementById('seconds')

    el_days.textContent = days
    el_hours.textContent = hours
    el_minutes.textContent = minutes
    el_seconds.textContent = seconds
}

countdown()
setInterval(countdown,1000)

