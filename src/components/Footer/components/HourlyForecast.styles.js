import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(211,211,211, .1);
    border-radius: 25%;
    padding: 5px;
    ${'' /* background-color: #15a6fb; */}
  `}
`
