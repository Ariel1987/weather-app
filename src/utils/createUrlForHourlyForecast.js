const createUrlForHourlyForecast = (lat, lon) => {
    const url = `http://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=9e1e5c0efc11947963b5b17b841dca86`
    return url
}

export default createUrlForHourlyForecast