import { useEffect, useState } from "react"
import { useForecast } from '@/context/forecast'
import { convertKelvinToCelcius } from '@/utils/convertKelvinToCelcius'

const MinMaxTemperature = () => {
    const { state } = useForecast()
    const [minMaxTemperature, setMinMaxTemperature] = useState({
        minTemperature: null,
        maxTemperature: null
    })

    useEffect(() => {
        if (state.data && !state.error) {
            setMinMaxTemperature({
                minTemperature: convertKelvinToCelcius(state.data.main.temp_min),
                maxTemperature: convertKelvinToCelcius(state.data.main.temp_max)
            })
        }
    }, [state])

    const { minTemperature, maxTemperature } = minMaxTemperature
    return (
        <div>
            <img src='./icons/termometro.png' alt='termometro' />
            <p>min {minTemperature}º</p>
            <p>max {maxTemperature}º</p>
        </div>
    )
}

export default MinMaxTemperature