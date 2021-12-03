import { Wrapper } from './CurrentWeatherConditions.styles'
import Humidity from './components/Humidity/Humidity'
import MinMaxTemperature from './components/MinMaxTemperature/MinMaxTemperature'
import Wind from './components/Wind/Wind'

const CurrentWeatherConditions = () => {
  return (
    <Wrapper>
      <MinMaxTemperature />
      <Wind />
      <Humidity />
    </Wrapper>
  )
}

export default CurrentWeatherConditions
