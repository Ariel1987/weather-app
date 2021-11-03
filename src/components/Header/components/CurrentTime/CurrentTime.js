import { useCallback, useEffect, useRef, useState } from 'react'
import formatTime from '@/utils/formatTime'

const CurrentTime = () => {
    const [localTime, setLocalTime] = useState(formatTime(new Date()))
    const intervalRef = useRef()

    const getTime = () => {
        const now = new Date()
        return formatTime(now)
    }

    const setTimeInterval = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setLocalTime(getTime())
        }, 1000)
    }, [])

    useEffect(() => {
        setTimeInterval()
        return () => clearInterval(intervalRef.current)
    }, [setTimeInterval])

    return (<p>{localTime}</p>)
}

export default CurrentTime