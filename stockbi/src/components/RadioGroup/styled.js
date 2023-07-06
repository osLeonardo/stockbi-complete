import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label{
      margin-bottom: 0.5rem;
    }

    input{
      margin-right: 0.5rem;
    }
    
  `}
`;

export const RadioText = styled.span`
  font-weight: ${(props) => (props.checked ? 'bold' : 'normal')};
`;