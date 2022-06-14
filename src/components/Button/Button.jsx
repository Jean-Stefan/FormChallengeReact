import styled from 'styled-components';

export const Button = styled.button`
    width: ${({width}) => width};
    height: ${({height}) => height};
    color: #ffffff;
    background: #0dbdbd;
    border-radius: 10px;
    border-color: transparent;
    font-size: 16px;

    :hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 56px;
        font-size: 18px;
    }
`;
