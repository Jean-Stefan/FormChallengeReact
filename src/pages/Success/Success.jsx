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
            <Image src='/src/assets/img/logo.png' />
            <Title mb={'30px'} r_mb={'15px'}>
                Success
            </Title>
            <Button onClick={() => navigate('/')}>Go Back!</Button>
        </Container>
    );
};
