import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { LoadingProvider } from '@/context/loading'
import App from '@/App'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/Theme'
import { ForecastProvider } from './context/forecast'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <ForecastProvider>
          <GlobalStyles />
          <App />
        </ForecastProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
