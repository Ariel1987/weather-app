import createUrlForHourlyForecast from '../utils/createUrlForHourlyForecast'
import CurrentLocation from './currentLocation'

const fetchForecast = (onSuccess, onError) => {
  debugger
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const url = createUrlForHourlyForecast(
        location.coordinates.lat,
        location.coordinates.lon,
      )

      return fetch(url)
        .then((data) => data.json())
        .then((data) => {
          onSuccess(data)
        })
        .catch((error) => {
          onError(error)
        })
    },
    (error) => {},
  )
}

export default fetchForecast
