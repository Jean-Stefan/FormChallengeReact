import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #ffffff;
    max-width: 620px;
    height: 685px;
    border-radius: 20px;
    padding: 40px 50px 60px 50px;

    @media (max-width: 768px) {
        padding: 0 20px;
        border-radius: 0;
        height: 100%;
    }
`;
