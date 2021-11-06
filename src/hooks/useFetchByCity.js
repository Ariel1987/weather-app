import { useLoading, LOADING, LOADING_ENDED } from '@/context/loading'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import createUrlByLocation from '@/utils/createUrlByLocation'
import {
  FETCHING_FORECAST_ERROR,
  FETCHING_FORECAST_SUCCESS,
  useForecast,
} from '@/context/forecast'
import { useEffect } from 'react'

const useFetchByCity = () => {
  const {
    state: { loading },
    dispatch: dispatchLoading,
  } = useLoading()
  const location = useCurrentLocation()
  const { dispatch } = useForecast()

  useEffect(() => {
    dispatchLoading({ type: LOADING })
    if (location.loaded) {
      const url = createUrlByCity('london')
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

  return loading
}

export default useFetchByCity
