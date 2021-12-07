import weatherIcons from '@/utils/weatherIcons'
import { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'
import useSunriseSunsetTime from './useSunriseSunsetTime'

const useWeatherIcons = () => {
  const icons = weatherIcons

  const { state } = useForecast()
  const [weather, setWeather] = useState(null)
  const { sunrise, sunset } = useSunriseSunsetTime()
  const now = new Date()

  useEffect(() => {
    if (state.data && !state.error) {
      setWeather(state.data.current.weather.main)
    }
  }, [state])

  if (now.getHours() > sunrise && now.getHours() < sunset) {
    switch (weather) {
      case 'Clear':
        return icons.day.Clear
      case 'Rain':
        return icons.day.Rain
      case 'Snow':
        return icons.day.Snow
      case 'Clouds':
        return icons.day.Cloud
      case 'Thunderstorm':
        return icons.day.Thunderstorm
      default:
        return icons.day.Cloud
    }
  } else {
    switch (weather) {
      case 'Clear':
        return icons.night.Clear
      case 'Clouds':
        return icons.night.Cloud
      case 'Rain':
        return icons.night.Rain
      case 'Snow':
        return icons.night.Snow
      case 'Thunderstorm':
        return icons.night.Thunderstorm
      default:
        return icons.night.Cloud
    }
  }
}

export default useWeatherIcons
