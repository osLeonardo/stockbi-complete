import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    height: 86vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
      color: #1D262D;
    }
    div {
      font-size: 4rem;
      color: #1D262D;
    }
  `}
`;