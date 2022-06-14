import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Inter', Helvetica;
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: ${({mb}) => mb};

    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`;
