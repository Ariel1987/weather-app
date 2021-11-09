import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 80vw;
  height: 30px;
  border-radius: 20px;
  padding: 0 14px 0 8px;
  border: none;
`
const CloseButton = styled.button`
  border: none;
  display: flex;
  border-radius: 17px;
  background-color: #ddd;
  height: 16px;
  width: 16px;
  justify-content: center;
  align-items: center;
  font-size: 9px;
`

const ButtonGroup = styled.div`
  width: fit-content;
  display: flex;
  position: absolute;
  right: 5px;
`

const SearchButton = styled.button`
  height: 20px;
  width: 20px;
  background-color: #2064af;
  border-radius: 50%;
  border: none;
  & > img {
    height: 12px;
    width: auto;
  }
`

export {
  ButtonGroup,
  Input,
  CloseButton,
  InputWrapper,
  SearchButton
}
