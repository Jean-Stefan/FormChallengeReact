import {useNavigate} from 'react-router-dom';
import {Container} from '../../components/Container/Container';
import {Image} from '../../components/Image/Image';
import {Title} from '../../components/Title/Title';
import {Button} from '../../components/Button/Button';
import styled from 'styled-components';

export const Success = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <FlexContainer>
                <Image src='/src/assets/img/logo.png' />
                <Title>Success!</Title>
                <Button
                    width='269px'
                    height='177px'
                    onClick={() => navigate('/')}
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
