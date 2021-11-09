import PropTypes from 'prop-types'
import { Input, CloseButton, InputWrapper } from './Search.styles'

const Search = ({ showSearchBar, onCloseSearch }) => {
  const handleSearchCity = (event) => {
    event.preventDefault()
    console.log(event.target.city.value)
  }

  if (!showSearchBar) return null

  return (
    <form onSubmit={handleSearchCity}>
      <InputWrapper>
        <Input type="text" id="city" placeholder="Type city name"/>
        <CloseButton onClick={onCloseSearch}>X</CloseButton>
      </InputWrapper>
      <button type="submit">
        <img src="./icons/search.png" alt="search" />
      </button>
    </form>
  )
}

Search.propTypes = {
  showSearchBar: PropTypes.bool.isRequired,
  onCloseSearch: PropTypes.func.isRequired
}

export default Search
