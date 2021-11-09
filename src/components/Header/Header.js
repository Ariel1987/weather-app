import { useState } from 'react'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'
import CurrentTime from './components/CurrentTime/CurrentTime'
import Search from './components/Search/Search'
import { SearchLocationWrapper } from './Header.styles'

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState()

  const showSearchBarHandler = () => {
    setShowSearchBar(true)
  }

  return (
    <div>
      <SearchLocationWrapper>
        {!showSearchBar && <CurrentLocation />}
        <Search 
          showSearchBar={showSearchBar} 
          onCloseSearch={() => setShowSearchBar(false)}
        />
        <button onClick={() => setShowSearchBar(state => !state)}>
          <img src="./icons/search.png" alt="search" />
        </button>
      </SearchLocationWrapper>
      <CurrentTime />
    </div>
  )
}

export default Header
