export const convertKelvinToCelcius = (kelvinTemperature) => {
    const celciusTemperature = Math.round(kelvinTemperature - 273.15)
    return celciusTemperature
}