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
  `}
`
