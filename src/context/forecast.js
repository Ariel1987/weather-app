import React from "react"

export const FETCHING_FORECAST = 'FETCHING_FORECAST'
export const FETCHING_FORECAST_SUCCESS = 'FETCHING_FORECAST_SUCCESS'
export const FETCHING_FORECAST_ERROR = 'FETCHING_FORECAST_ERROR'

const ForecastContext = React.createContext()

const initState = {
  error: false,
  data: null
}

function forecastReducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_FORECAST: {
      return
    }
    case FETCHING_FORECAST_SUCCESS: {
      return {
        data: action.payload,
        error: false
      }
    }
    case FETCHING_FORECAST_ERROR: {
      return {
        data: null,
        error: true,
        errorData: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ForecastProvider({ children }) {
  const [state, dispatch] = React.useReducer(forecastReducer, { data: null, error: false })
  const value = { state, dispatch }
  return (
    <ForecastContext.Provider value={value}>{children}</ForecastContext.Provider>
  )
}

function useForecast() {
  const context = React.useContext(ForecastContext)
  if (context === undefined) {
    throw new Error('useForecast must be used within a ForecastProvider')
  }
  return context
}

export { ForecastProvider, useForecast }
