const createUrlByLocation = (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9e1e5c0efc11947963b5b17b841dca86`
    return url
}

export default createUrlByLocation