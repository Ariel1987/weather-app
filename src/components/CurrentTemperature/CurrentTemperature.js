import { useEffect, useState } from 'react'
import { useForecast } from '../../context/forecast'
import { convertKelvinToCelcius } from '../../utils/convertKelvinToCelcius'
import { Wrapper } from './CurrentTemperature.styles'

const CurrentTemperature = () => {
  const { state } = useForecast()
  const [weather, setWeather] = useState({
    currentTemperature: null,
    currentWeather: null,
  })

  useEffect(() => {
    if (state.data && !state.error) {
      setWeather({
        currentTemperature: convertKelvinToCelcius(state.data.main.temp),
        currentWeather: state.data.weather[0].main,
      })
    }
  }, [state])

  const { currentTemperature, currentWeather } = weather

  return (
    <Wrapper>
      <img src="./icons/sunny-cloudy.png" alt="" />
      <h1>{currentTemperature}ºC</h1>
      <p>{currentWeather}</p>
    </Wrapper>
  )
}

export default CurrentTemperature
