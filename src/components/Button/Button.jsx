import styled from 'styled-components';

export const Button = styled.button`
    width: ${({width}) => width};
    height: ${({height}) => height};
    color: #ffffff;
    background: #0dbdbd;
    border-radius: 10px;
    border-color: transparent;

    :hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`;
