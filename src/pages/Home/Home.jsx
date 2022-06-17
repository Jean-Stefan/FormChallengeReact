import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {Container} from '../../components/Container/Container';
import {Input, Label} from '../../components/Input/Input';
import {Image} from '../../components/Image/Image';
import {Title} from '../../components/Title/Title';
import {Button} from '../../components/Button/Button';
import {Checkbox} from '../../components/Checkbox/Checkbox';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src='/src/assets/img/logo.png' />
            <Title mb={'30px'} r_mb={'15px'}>
                Intern Sign Up
            </Title>
            <FlexColumn mb={'40px'} r_mb={'15px'}>
                <Label htmlFor='name'>Full Name *</Label>
                <Input id='name' name='name' placeholder={'Foo Bar'} />
            </FlexColumn>
            <FlexRow>
                <FlexColumn flex={2}>
                    <FlexColumn
                        mb={'50px'}
                        mr={'25px'}
                        r_mb={'15px'}
                        r_mr={'0'}
                    >
                        <Label htmlFor='email'>Email *</Label>
                        <Input
                            id='email'
                            name='email'
                            type={'email'}
                            placeholder={'foo@bar.com'}
                        />
                    </FlexColumn>
                    <FlexColumn
                        mb={'50px'}
                        mr={'25px'}
                        r_mb={'15px'}
                        r_mr={'0'}
                    >
                        <Label htmlFor='password'>Password *</Label>
                        <Input
                            name='password'
                            id='password'
                            type={'password'}
                        />
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn flex={1} responsive={'row'} r_mb={'40px'}>
                    <GroupPhone mb={'50px'} r_mb={'0px'} r_mr={'15px'}>
                        <Label htmlFor='phone'>Phone</Label>
                        <Input
                            name='phone'
                            id='phone'
                            type={'tel'}
                            placeholder={'(83) 00000-0000'}
                        />
                    </GroupPhone>
                    <GroupBirthday>
                        <Label htmlFor='birthday'>Birthday *</Label>
                        <Input name='birthday' id='birthday' type={'date'} />
                    </GroupBirthday>
                </FlexColumn>
            </FlexRow>
            <FlexRow>
                <Checkbox label='I accept the terms and privacy' />
                <Button
                    width='80px'
                    height='40px'
                    fontSize='16px'
                    r_FontSize='18px'
                    onClick={(e) => {
                        e.preventDefault;
                        navigate('/success');
                    }}
                >
                    Register
                </Button>
            </FlexRow>
        </Container>
    );
};

const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${({flex}) => flex};
    margin-bottom: ${({mb}) => mb};
    margin-right: ${({mr}) => mr};

    @media (max-width: 768px) {
        flex-direction: ${({responsive}) => responsive};
        margin-bottom: ${({r_mb}) => r_mb};
        margin-right: ${({r_mr}) => r_mr};
    }
`;

const GroupPhone = styled(FlexColumn)`
    @media (max-width: 768px) {
        width: 50%;
        flex: 1;
    }
`;

const GroupBirthday = styled(FlexColumn)`
    max-height: 69px;

    @media (max-width: 768px) {
        width: calc(50% - 15px);
        flex: 1;
    }
`;
