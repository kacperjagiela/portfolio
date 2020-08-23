import styled from 'styled-components';

export const FadeInDiv = styled.div`
    font-family: 'Red Rose', cursive;
    animation: fadeIn ease-in 1s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export default FadeInDiv;
