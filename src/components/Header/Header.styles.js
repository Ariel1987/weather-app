import styled, { css } from 'styled-components'

export const SearchLocationWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: 5px;

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: transparent;
      border: none;
    }

    img {
      height: 15px;
      width: auto;
    }

    input {
      padding: 5px;
      border-radius: 5px;
      border: none;
      color: #757575;
      width: 80vw;
      margin-bottom: 10px;
      background: rgba(255, 255, 255, .8);

      :focus {
        border: none;
      }
    }
  `}
`
