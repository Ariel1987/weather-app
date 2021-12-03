import { useState } from 'react'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'
import Search from './components/Search/Search'
import { Button, SearchLocationWrapper } from './Header.styles'

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const handleShowSearchBar = () => {
    setShowSearchBar(true)
  }

  return (
    <>
      <SearchLocationWrapper>
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
