import React, { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'

const CurrentLocation = ({ onClick }) => {
  const [city, setCity] = useState()
  const { state } = useForecast()

  useEffect(() => {
    if (state.data && !state.error) {
      setCity(state.data.timezone)
    }
  }, [state])

  return <p onClick={onClick}>{city}</p>
}

export default CurrentLocation
