import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ imgUrl }) => css`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-image: url(${imgUrl});
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 0 10px 10px -2px #0a3d83;
  `}
`

export const BackArrowButton = styled.section`
  position: absolute;
  top: 10px;
  left: 10px;

  img {
    width: 20px;
  }
`

export const HeaderWrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.font};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.bold};
    margin-top: 5vh;
  `}
`

export const CurrentWeatherDateWrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.font};
    font-size: ${theme.font.size.small};
  `}
`

export const CurrentWeatherConditionsWrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.font};
    font-size: ${theme.font.size.small};
    margin-bottom: 5vh;

    hr {
      width: 90vw;
      margin-bottom: 20px;
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
    transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateY(${loading ? '-100%' : 0});
    z-index: 1;
  `}
`
