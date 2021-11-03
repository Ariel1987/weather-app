import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        img {
            width: 200px;
            height: auto;

            .attrs {
                src: url(${props => props.src})
            }

        }

        h1 {
            font-size: ${theme.font.size.xxxlarge};
        }

        p {
            font-weight: ${theme.font.weight.bold};
            padding-top: 0.5rem;
        }
   `}
`
