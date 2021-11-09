import { useState } from 'react'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'
import CurrentTime from './components/CurrentTime/CurrentTime'
import Search from './components/Search/Search'
import { Button, SearchLocationWrapper } from './Header.styles'

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <div>
      <SearchLocationWrapper>
        {!showSearchBar && <CurrentLocation />}
        <Search
          showSearchBar={showSearchBar}
          closeSearch={setShowSearchBar}
        />
        {
          !showSearchBar
          && (
            <Button onClick={() => setShowSearchBar(state => !state)}>
              <img src="./icons/search.png" alt="search" />
            </Button>
          )
        }
      </SearchLocationWrapper>
      <CurrentTime />
    </div>
  )
}

export default Header
