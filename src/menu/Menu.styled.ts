import styled from 'styled-components';

interface Props {
    open: boolean;
}

const StyledMenu = styled.nav<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding-left: 2rem;
    padding-right: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    border-right: 5px solid #555;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        padding: 0;
        border-right: none;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: justify;
        padding: 1.5rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        transition: color 0.3s linear;
        box-shadow: 0 4px 2px -2px gray;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
            text-align: center;
            margin-left: 10vw;
            margin-right: 10vw;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;

export default StyledMenu;
