import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    img {
      width: 300px;
      height: auto;

      .attrs {
        src: url(${(props) => props.src});
      }
    }
  `}
`
