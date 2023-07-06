import styled, { keyframes } from "styled-components";

const float = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div` 
    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 10px solid #383636; /* Black */
        border-radius: 50%;
        animation: ${float} 1.5s linear infinite;
    }
`;
