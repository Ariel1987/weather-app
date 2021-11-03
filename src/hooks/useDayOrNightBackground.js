import useSunriseSunsetTime from './useSunriseSunsetTime'

const useDayOrNightBackground = () => {
  const { sunrise, sunset } = useSunriseSunsetTime()
  const now = new Date()

  return now.getHours() > sunrise && now.getHours() < sunset
    ? './images/day.jpg'
    : './images/night.jpg'
}

export default useDayOrNightBackground
