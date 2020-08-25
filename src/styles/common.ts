import styled from 'styled-components';

export const FadeInDiv = styled.div`
    font-family: 'Red Rose', cursive;
    animation: fadeIn ease-in 1s;
    width: 100%;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
`;

export default FadeInDiv;
