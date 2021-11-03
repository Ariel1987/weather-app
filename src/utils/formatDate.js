const formatTime = (now) => {
    let dayOfTheMonth = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()
    let day = now.getDay()

    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    for (let i = 0; i < daysOfTheWeek.length; i++) {
        if (day === i) {
            day = daysOfTheWeek[i]
        }
    }

    if (month < 10) {
        month = "0" + month
    }

    if (dayOfTheMonth < 10) {
        dayOfTheMonth = "0" + dayOfTheMonth
    }
    return day + ' ' + dayOfTheMonth + '/' + month + '/' + year
}

export default formatTime
