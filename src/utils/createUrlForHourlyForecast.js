const createUrlForHourlyForecast = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=9e1e5c0efc11947963b5b17b841dca86`
    return url
}

export default createUrlForHourlyForecast