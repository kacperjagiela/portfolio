import styled from 'styled-components';

const AboutText = styled.h2`
    width: 65%;
    margin-left: 17.5%;
    color: ${({ theme }) => theme.primaryLink};
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: calc(1.2rem + (1.5 - 1.3) * ((100vw - 21rem) / (40 - 15)));

    strong {
        position: relative;
        margin: 0.1em;
        background-color: ${({ theme }) => theme.primaryLight};
        border-radius: 5px;

        &:before {
            content: '';
            z-index: -1;
            left: -0.5em;
            top: 0.1em;
            border-width: 0.5em;
            border-style: solid;
            border-color: ${({ theme }) => theme.primaryLight};
            position: absolute;
            width: 100%;
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }
`;

export default AboutText;
