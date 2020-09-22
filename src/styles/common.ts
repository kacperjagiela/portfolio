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
    font-size: calc(1.3rem + (1.5 - 1.3) * ((100vw - 18rem) / (30 - 21)));
`;

export default FadeInDiv;
