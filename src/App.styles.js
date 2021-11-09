import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        background-image: url(${props => props.imgUrl});
        text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
   `}
`

export const HeaderWrapper = styled.section`
    ${({ theme }) => css`
        color: ${theme.colors.font};
        font-size: ${theme.font.size.small};
        font-weight: ${theme.font.weight.bold};  
    `}
`

export const CurrentWeatherDateWrapper = styled.section`
    ${({ theme }) => css`
        color: ${theme.colors.font};
        font-size: ${theme.font.size.small};
    `}
`

export const FooterWrapper = styled.section`
    ${({ theme }) => css`
        color: ${theme.colors.font};
        font-size: ${theme.font.size.small};

        hr {
            width: 90vw;
            margin-bottom: 20px
        }
    `}
`

export const Modal = styled.div`
    ${({ loading }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: rgb(30 117 188 / 85%);
        transition: all .7s cubic-bezier(0.215, 0.610, 0.355, 1);
        transform: translateY(${loading ? '-100%' : 0});
        z-index: 1;
    `}
`