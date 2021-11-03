import React, { useEffect, useState } from 'react'
import { useForecast } from '@/context/forecast'

const CurrentLocation = () => {
  const [city, setCity] = useState()
  const { state } = useForecast()

  useEffect(() => {
    if (state.data && !state.error) {
      setCity(state.data.name)
    }
  }, [state])

  return <p>{city}</p>
}

export default CurrentLocation
