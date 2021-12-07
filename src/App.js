import { useEffect } from 'react'
import {
  CurrentWeatherDateWrapper,
  HeaderWrapper,
  Wrapper,
  Modal,
} from '@/App.styles'
import CurrentTemperature from '@/components/CurrentTemperature/CurrentTemperature'
import CurrentDate from '@/components/CurrentDate/CurrentDate'
import Header from '@/components/Header/Header'
import useDayOrNightBackground from '@/hooks/useDayOrNightBackground'
import useFetchByLocation from '@/hooks/useFetchByLocation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CurrentWeatherConditionsWrapper } from './App.styles'
import Footer from './components/Footer/Footer'
import CurrentWeatherConditions from './components/CurrentWeatherConditions/CurrentWeatherConditions'
import useFetchByLocationHourly from './hooks/useFetchByLocationHourly'
import fetchForecast from './utils/fetchForecastHourly'
import createUrlForHourlyForecast from './utils/createUrlForHourlyForecast'
import { useLoading, LOADING, LOADING_ENDED } from '@/context/loading'
import {
  FETCHING_FORECAST_ERROR,
  FETCHING_FORECAST_SUCCESS,
  useForecast,
} from '@/context/forecast'


function App() {
  const dayOrNight = useDayOrNightBackground()
  const {
    state: { loading },
    dispatch: dispatchLoading
  } = useLoading()
  const { dispatch: dispatchForecast } = useForecast()
  useFetchByLocationHourly()

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
        <CurrentWeatherConditionsWrapper>
          <hr />
          <CurrentWeatherConditions />
        </CurrentWeatherConditionsWrapper>
      </Wrapper>
      <Footer />
      {loading && (
        <Modal loading={loading}>
          <img src="./images/loading.svg" alt="loading" />
        </Modal>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
