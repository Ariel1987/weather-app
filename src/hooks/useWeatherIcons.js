import weatherIcons from "@/utils/weatherIcons"
import { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'

const useWeatherIcons = () => {
    const icons = weatherIcons

    const { state } = useForecast()
    const [weather, setWeather] = useState(null)
  
    useEffect(() => {
      if (state.data && !state.error) {
        setWeather(state.data.weather[0].main)
      }
    }, [state])
  
    switch(weather) {
        case 'Clear':
            return icons.Clear
        case 'Rain':
            return icons.Rain
        case 'Snow':
            return icons.Snow
        case 'Cloud':
            return icons.Cloud
        case 'Thunderstorm':
            return icons.Thunderstorm
        default:
            return icons.Cloud
    }
}

export default useWeatherIcons