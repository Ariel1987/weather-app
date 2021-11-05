const Search = (props) => {

  return (
    <button onClick={props.onClick}>
      {props.onShowSearchBar && (
        <input type="text" id="city" name="city" defaultValue="Search a city" />
      )}
      {!props.onShowSearchBar && <img src="./icons/search.png" alt="search" />}
    </button>
  )
}

export default Search
