import { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'
import useWeatherIcons from '@/hooks/useWeatherIcons'
import { Wrapper } from './CurrentTemperature.styles'

const CurrentTemperature = () => {
  const { state } = useForecast()
  const [weather, setWeather] = useState({
    currentTemperature: null,
    currentWeather: null,
  })
  const icons = useWeatherIcons()

  useEffect(() => {
    if (state.data && !state.error) {
      setWeather({
        currentTemperature: Math.round(state.data.current.temp),
        currentWeather: state.data.current.weather[0].main,
      })
    }
  }, [state])

  const { currentTemperature, currentWeather } = weather

  return (
    <Wrapper>
      <img src={icons} alt="weather-icon" />
      <h1>{currentTemperature}ºC</h1>
      <h3>{currentWeather}</h3>
    </Wrapper>
  )
}

export default CurrentTemperature
