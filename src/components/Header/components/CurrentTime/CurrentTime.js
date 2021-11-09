import { useCallback, useEffect, useRef, useState } from 'react'
import formatTime from '@/utils/formatTime'
import { useForecast } from '@/context/forecast'

const CurrentTime = () => {
  const {
    state: { data },
  } = useForecast()
  const [localTime, setLocalTime] = useState(data?.dt)
  const intervalRef = useRef()

  useEffect(() => {
    if (data) {
      setLocalTime(data.dt)
      clearInterval(intervalRef.current)
    }
  }, [data])

  const setTimeInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setLocalTime(localTime)
    }, 1000)
  }, [localTime])

  useEffect(() => {
    setTimeInterval()
    return () => clearInterval(intervalRef.current)
  }, [setTimeInterval])

  console.log(data)
  console.log(formatTime(localTime))

  return <p>{formatTime(localTime)}</p>
}

export default CurrentTime
