import { useLoading, LOADING, LOADING_ENDED } from '@/context/loading'
import createUrlByCity from '@/utils/createUrlByCity'
import {
  FETCHING_FORECAST_ERROR,
  FETCHING_FORECAST_SUCCESS,
  useForecast,
} from '@/context/forecast'
import { useEffect } from 'react'

const useFetchByCity = (city) => {
  const {
    state: { loading },
    dispatch: dispatchLoading,
  } = useLoading()
  const { dispatch } = useForecast()
  const location = city

  useEffect(() => {
    dispatchLoading({ type: LOADING })
    const url = createUrlByCity(location)
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
  }, [dispatch, dispatchLoading, location])

  return loading
}

export default useFetchByCity
