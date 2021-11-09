export const convertResponse = (res) => {
    if (!res) throw new Error('No res object to look into.')
    const { main, name, weather, wind, sys, coord } = res
    const { humidity, temp, temp_max, temp_min } = main
    const { sunrise, sunset } = sys
    const { speed } = wind

    return {
        humidity,
        temp,
        temp_max,
        temp_min,
        sunrise,
        sunset,
        speed,
        cityName: name,
        weather: weather[0].main,
        coord
    }
}
