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
        <Search onClick={showSearchBarHandler} onShowSearchBar={showSearchBar}/>
      </SearchLocationWrapper>
      <CurrentTime />
    </div>
  )
}

export default Header
