import { useState } from 'react'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'
import Search from './components/Search/Search'
import { BackButton, Button, SearchLocationWrapper } from './Header.styles'
import { useForecast } from '../../context/forecast'
import useFetchByLocationHourly from '@/hooks/useFetchByLocationHourly'

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const {
    state: { userSearch },
  } = useForecast()
  const fetchData = useFetchByLocationHourly()
  const handleShowSearchBar = () => {
    setShowSearchBar(true)
  }

  const handleBackButton = () => {
    fetchData()
  }

  return (
    <>
      <SearchLocationWrapper>
        {userSearch && (
          <BackButton onClick={handleBackButton}>
            <img src="./icons/back-arrow.png" alt="back-arrow" />
          </BackButton>
        )}
        {!showSearchBar && (
          <CurrentLocation onClick={() => handleShowSearchBar(true)} />
        )}
        <Search showSearchBar={showSearchBar} closeSearch={setShowSearchBar} />
        {!showSearchBar && (
          <Button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              handleShowSearchBar(true)
            }}
          >
            <img src="./icons/search.png" alt="search" />
          </Button>
        )}
      </SearchLocationWrapper>
    </>
  )
}

export default Header
