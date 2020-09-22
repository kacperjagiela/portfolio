import styled from 'styled-components';

export const ContactLinks = styled.div`
    a {
        color: ${({ theme }) => theme.primaryLink};
        transition: 0.2s;

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;

export const ContactIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
    vertical-align: middle;
`;
