import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 10vw 0;
    height: 18vh;
    margin-top: 2vh;
    width: 100vw;
    background-color: #010c1d;
    align-self: flex-end;
    color: white;
    
    p {
      font-size: 10px;
      color: #425366;
    }
  `}
`
