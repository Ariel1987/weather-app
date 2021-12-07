import useFetchByLocationHourly from '../../hooks/useFetchByLocationHourly'
import HourlyForecast from './components/HourlyForecast'
import { HeaderWrapper, HourlyForecastWrapper, Wrapper } from './Footer.styles'

const Footer = () => {
  // useFetchByLocationHourly()

  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>Today</h3>
        <p>7 days {'>'}</p>
      </HeaderWrapper>
      <HourlyForecastWrapper>
        <HourlyForecast />
        <HourlyForecast />
        <HourlyForecast />
        <HourlyForecast />
      </HourlyForecastWrapper>
    </Wrapper>
  )
}

export default Footer
