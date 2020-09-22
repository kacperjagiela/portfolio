import styled from 'styled-components';

export const ProjectsDiv = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`;

export const ProjectImage = styled.img`
    width: 100%;
    box-shadow: 0 5px 30px -10px black;
    border-radius: 0.5rem;
    border-left: 0 solid ${({ theme }) => theme.primaryHover};
    transition: border-left 300ms ease-in-out;

    &:hover {
        border-left: 1rem solid ${({ theme }) => theme.primaryHover};
    }
`;

export const ProjectLink = styled.a`
    width: 26%;
    margin: 1.5vw;
`;
