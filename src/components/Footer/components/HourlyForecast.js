import { Wrapper } from './HourlyForecast.styles'
import { useForecast } from '@/context/forecast'
import { useEffect, useState } from 'react'
import useWeatherIcons from '@/hooks/useWeatherIcons'

const HourlyForecast = () => {
  const { state } = useForecast()
  const [hourlyWeather, setHourlyWeather] = useState({ hourlyTemperature: null })
  const icons = useWeatherIcons()

  useEffect(() => {
    if (state.data && !state.error) {
      setHourlyWeather({
        hourlyTemperature: Math.round(state.data.hourly[0].temp) 
      })
    }
  }, [state])

  return (
    <Wrapper>
      <h5>{hourlyWeather.hourlyTemperature}º</h5>
      <img src={icons} alt="weather-icon" />
      <p>Morning</p>
    </Wrapper>
  )
}

export default HourlyForecast
