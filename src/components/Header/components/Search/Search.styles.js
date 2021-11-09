import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
`
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
`

export { Input, CloseButton, InputWrapper }
