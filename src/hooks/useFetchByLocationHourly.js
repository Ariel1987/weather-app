import { useLoading, LOADING, LOADING_ENDED } from '@/context/loading'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import {
  FETCHING_FORECAST_ERROR,
  FETCHING_FORECAST_SUCCESS,
  useForecast,
} from '@/context/forecast'
import { useEffect } from 'react'
import createUrlForHourlyForecast from '../utils/createUrlForHourlyForecast'

const useFetchByLocationHourly = () => {
  const { dispatch: dispatchLoading } = useLoading()
  const location = useCurrentLocation()
  const { dispatch } = useForecast()
  
  useEffect(() => {
    dispatchLoading({ type: LOADING })
    if (location.loaded) {
      const url = createUrlForHourlyForecast(
        location.coordinates.lat,
        location.coordinates.long,
      )
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          if (data.cod === '400') {
            dispatch({ type: FETCHING_FORECAST_ERROR, payload: data })
          } else {
            dispatch({ type: FETCHING_FORECAST_SUCCESS, payload: data })
          }
          dispatchLoading({ type: LOADING_ENDED })
        })
        .catch((error) => {
          dispatch({ type: FETCHING_FORECAST_ERROR, payload: error })
          dispatchLoading({ type: LOADING_ENDED })
        })
    }
  }, [dispatch, dispatchLoading, location])
}

export default useFetchByLocationHourly
