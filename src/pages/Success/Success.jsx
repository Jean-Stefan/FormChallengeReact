import {useNavigate} from 'react-router-dom';
import {Container, Image, Button, Title} from '../../components';
import styled from 'styled-components';

import logo from '../../assets/img/logo.png';

export const Success = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        localStorage.clear();
    };
    return (
        <Container>
            <FlexContainer>
                <Image src='./src/assets/img/logo.png' />
                <Title>Success!</Title>
                <Button
                    width='269px'
                    height='177px'
                    fontSize='36px'
                    onClick={handleClick}
                >
                    Go Back!
                </Button>
            </FlexContainer>
        </Container>
    );
};

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
        row-gap: 35px;
    }
`;
