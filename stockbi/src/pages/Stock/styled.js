import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 86vh;
    background: #1D262D;
    color: white;
  `}
`;
