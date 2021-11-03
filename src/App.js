import React, { useEffect } from 'react'
import {
  CurrentWeatherDateWrapper,
  FooterWrapper,
  HeaderWrapper,
  Wrapper,
  Modal,
} from '@/App.styles'
import CurrentTemperature from '@/components/CurrentTemperature/CurrentTemperature'
import CurrentDate from '@/components/CurrentDate/CurrentDate'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useLoading, LOADING, LOADING_ENDED } from '@/context/loading'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import createUrlByLocation from '@/utils/createUrlByLocation'
import {
  FETCHING_FORECAST_ERROR,
  FETCHING_FORECAST_SUCCESS,
  useForecast,
} from '@/context/forecast'
import useDayOrNightBackground from './hooks/useDayOrNightBackground'

function App() {
  const {
    state: { loading },
    dispatch: dispatchLoading,
  } = useLoading()
  const location = useCurrentLocation()
  const { dispatch } = useForecast()
  const dayOrNight = useDayOrNightBackground()

  useEffect(() => {
    dispatchLoading({ type: LOADING })
    if (location.loaded) {
      const url = createUrlByLocation(
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

  return (
    <>
      <Wrapper imgUrl={dayOrNight}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <CurrentWeatherDateWrapper>
          <CurrentTemperature />
          <CurrentDate />
        </CurrentWeatherDateWrapper>
        <FooterWrapper>
          <hr />
          <Footer />
        </FooterWrapper>
      </Wrapper>
      {loading && (
        <Modal loading={loading}>
          <img src="./images/loading.svg" alt="loading" />
        </Modal>
      )}
    </>
  )
}

export default App
