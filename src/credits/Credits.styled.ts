import styled from 'styled-components';

const CreditsList = styled.div`
    font-size: 1.5rem;

    a {
        color: ${({ theme }) => theme.primaryLink};
        transition: 0.2s linear;

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;

export default CreditsList;
