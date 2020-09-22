import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
        width: 70%;
        margin-left: 15%;

        @media (min-width: ${({ theme }) => theme.fullHD}) {
            width: 60%;
            margin-left: 20%;
        }
    }

    h1 {
        a {
            color: ${({ theme }) => theme.primaryLink};
            text-decoration: underline;
            transition: 0.2s linear;

            &:hover {
                color: ${({ theme }) => theme.primaryHover};
            }
        }
    }
`;

export default StyledHome;
