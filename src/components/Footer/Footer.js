import { Wrapper } from "./Footer.styles"
import Humidity from "./components/Humidity/Humidity"
import MinMaxTemperature from "./components/MinMaxTemperature/MinMaxTemperature"
import Wind from "./components/Wind/Wind"

const Footer = () => {
    return (
        <Wrapper>
            <MinMaxTemperature />
            <Wind />
            <Humidity />
        </Wrapper>
    )
}

export default Footer
