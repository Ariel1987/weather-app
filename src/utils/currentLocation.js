export default class CurrentLocation {
  coordinates = {
    lat: '',
    lon: ''
  }

  error = {}

  constructor() {
    if (!('geolocation' in navigator)) {
      throw new Error('Geolocation not supported')
    }

    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
  }
  
  setCoordinates = (location) => {
    this.coordinates = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }    
  }

  getCoordinates = () => {
    return this.coordinates
  }

  onSuccess = (location) => {
    this.setCoordinates(location)
  }

  onError = (error) => {
    this.error = {
      loaded: true,
      error
    }
  }
}