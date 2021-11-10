import { useState } from 'react'

import PropTypes from 'prop-types'
import { Input, CloseButton, InputWrapper, ButtonGroup, SearchButton } from './Search.styles'
import createUrlByCity from '@/utils/createUrlByCity'
import { useLoading, LOADING, LOADING_ENDED } from '@/context/loading'
import {
  useForecast,
  FETCHING_FORECAST_SUCCESS
} from '@/context/forecast'
import { toast } from 'react-toastify'

const Search = ({ showSearchBar, closeSearch }) => {
  const [city, setCity] = useState('')
  const { dispatch: dispatchLoading } = useLoading()
  const { dispatch: dispatchForecastData } = useForecast()

  const handleSearchCity = (event) => {
    event.preventDefault()
    dispatchLoading({ type: LOADING })
    const url = createUrlByCity(city)
    fetch(url)
      .then(data => data.json())
      .then(weatherData => {
        try {
          if (weatherData.cod === '404') {
            dispatchLoading({ type: LOADING_ENDED })
            toast.error(`City ${city} not found`, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          } else {
            dispatchForecastData({ type: FETCHING_FORECAST_SUCCESS, payload: weatherData })
            dispatchLoading({ type: LOADING_ENDED })
            closeSearch(false)
          }
        } catch (error) {
          console.error(error)
          dispatchLoading({ type: LOADING_ENDED })
        }
      })
      .catch(error => console.warn(error))
  }

  if (!showSearchBar) return null

  return (
    <form onSubmit={handleSearchCity}>
      <InputWrapper>
        <Input
          type="text"
          id="city"
          placeholder="Type city name"
          onChange={event => setCity(event.target.value)}
          value={city}
        />
        <ButtonGroup>
          {
            !!city
              ? (
                <>
                  <SearchButton type="submit" >
                    <img src="./icons/search.png" alt="search" />
                  </SearchButton>
                  <CloseButton
                    type="button"
                    onClick={() => setCity('')}
                  >
                    X
                  </CloseButton>
                </>
              )
              : (
                <CloseButton
                  type="button"
                  onClick={() => closeSearch(false)}
                >
                  X
                </CloseButton>
              )
          }
        </ButtonGroup>
      </InputWrapper>
    </form>
  )
}

Search.propTypes = {
  showSearchBar: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired
}

export default Search
