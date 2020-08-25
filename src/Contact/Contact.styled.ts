import styled from 'styled-components';

const ContactLinks = styled.div`
    a {
        color: ${({ theme }) => theme.primaryLink};
        transition: 0.2s;

        &:hover {
            color: ${({ theme }) => theme.primaryLight};
        }
    }
`;

export default ContactLinks;
