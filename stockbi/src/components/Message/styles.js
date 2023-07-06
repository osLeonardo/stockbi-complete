import styled, { css } from 'styled-components';

export const Success = styled.div`
  ${() => css`
    width: 50%;
    padding: 1em;
    border: 1px solid #000;
    margin: 1.2em auto 0;
    text-align: center;
    border-radius: 5px;
    color: #155724;
    background-color: #D4EDDA;
    border-color: #C3E6CB;
  `}
`;

export const Error = styled.div`
  ${() => css`
    width: 50%;
    padding: 1em;
    border: 1px solid #000;
    margin: 1.2em auto 0;
    text-align: center;
    border-radius: 5px;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`;