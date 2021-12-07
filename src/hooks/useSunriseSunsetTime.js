import { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'

const useSunriseSunsetTime = () => {
  const { state } = useForecast()
  const [sunriseSunsetTime, setSunRiseSunsetTime] = useState({
    sunrise: null,
    sunset: null,
  })

  useEffect(() => {
    if (state.data && !state.error) {
      setSunRiseSunsetTime({
        sunrise: new Date(state.data.daily[0].sunrise*1000).getHours(),
        sunset: new Date(state.data.daily[0].sunset*1000).getHours(),
      })
    }
  }, [state])
  return sunriseSunsetTime
}

export default useSunriseSunsetTime
