import { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'

const MinMaxTemperature = () => {
  const { state } = useForecast()
  const [minMaxTemperature, setMinMaxTemperature] = useState({
    minTemperature: null,
    maxTemperature: null,
  })

  useEffect(() => {
    if (state.data && !state.error) {
      setMinMaxTemperature({
        minTemperature: Math.round(state.data.daily[0].temp.min),
        maxTemperature: Math.round(state.data.daily[0].temp.max),
      })
    }
  }, [state])

  const { minTemperature, maxTemperature } = minMaxTemperature
  return (
    <div>
      <img src="./icons/termometro.png" alt="termometro" />
      <p>min {minTemperature}º</p>
      <p>max {maxTemperature}º</p>
    </div>
  )
}

export default MinMaxTemperature
