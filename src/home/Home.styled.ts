import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
        a {
            color: inherit;
            text-decoration: underline;
            transition: 0.3s;

            &:hover {
                color: ${({ theme }) => theme.primaryHover};
            }
        }
    }
`;

export default StyledHome;
