import { useState, useEffect } from "react"

const useCurrentLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', long: '' },
        error: null,
    })

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    return location
}

export default useCurrentLocation

