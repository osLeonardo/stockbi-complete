import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const AreaPrincipal = styled.div`
    .flutuante{
        animation: ${float} 5s ease-in-out infinite;
    }
    
`;
