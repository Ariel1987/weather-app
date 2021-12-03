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
import { useLoading } from '@/context/loading'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BackArrowButton, CurrentWeatherConditionsWrapper } from './App.styles'
import Footer from './components/Footer/Footer'
import CurrentWeatherConditions from './components/CurrentWeatherConditions/CurrentWeatherConditions'

function App() {
  const dayOrNight = useDayOrNightBackground()
  useFetchByLocation()
  const {
    state: { loading },
  } = useLoading()

  return (
    <>
      <Wrapper imgUrl={dayOrNight}>
        <BackArrowButton>
          <img src="./icons/back-arrow.png" alt="back-arrow" />
        </BackArrowButton>
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
