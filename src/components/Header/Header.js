import CurrentLocation from './components/CurrentLocation/CurrentLocation'
import CurrentTime from './components/CurrentTime/CurrentTime'

const Header = () => {
  return (
    <div>
      <CurrentLocation />
      <CurrentTime />
    </div>
  )
}

export default Header
