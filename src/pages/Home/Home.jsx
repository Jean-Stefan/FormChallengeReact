import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

import {Container} from '../../components/Container/Container';
import {Input, Label} from '../../components/Input/Input';
import {Image} from '../../components/Image/Image';
import {Title} from '../../components/Title/Title';
import {Button} from '../../components/Button/Button';
import {Checkbox} from '../../components/Checkbox/Checkbox';
import {phoneMask} from '../../utils/phoneMask';

const schema = yup
    .object({
        name: yup
            .string()
            .matches(/^[\w]+(?:\s[\w]+)+$/, 'Fullname invalid')
            .required('Fullname invalid'),
        email: yup
            .string()
            .matches(
                /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
                'Email invalid',
            )
            .required('Email invalid'),
        password: yup
            .string()
            .matches(/^[0-9]{6,9}$/, 'Password invalid')
            .required('Password invalid'),
        phone: yup
            .string()
            .matches(/^([(][0-9]{2}[)]) ([0-9]{5})-([0-9]{4})/, 'Phone invalid')
            .required(),
        birthday: yup
            .date()
            .typeError('Age invalid')
            .min('1899-01-01', 'Age invalid')
            .required('Age invalid'),
        checkbox: yup.boolean().isTrue('You must agree with terms'),
    })
    .required();

export const Home = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (formData) => {
        navigate('/success');
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Form>
                <Image src='/src/assets/img/logo.png' />

                <Title mb={'30px'} r_mb={'15px'}>
                    Intern Sign Up
                </Title>

                <GroupName>
                    <Label htmlFor='name'>Full Name *</Label>
                    <Input
                        {...register('name', {
                            required: true,
                        })}
                        placeholder={'Foo Bar'}
                    />
                    {errors.name && <Error>{errors.name?.message}</Error>}
                </GroupName>

                <FlexRow>
                    <FlexColumn flex={2}>
                        <GroupEmail>
                            <Label htmlFor='email'>Email *</Label>
                            <Input
                                type={'email'}
                                {...register('email', {required: true})}
                                placeholder={'foo@bar.com'}
                            />
                            {errors.email && (
                                <Error>{errors.email?.message}</Error>
                            )}
                        </GroupEmail>

                        <GroupPassword>
                            <Label htmlFor='password'>Password *</Label>
                            <Input
                                {...register('password', {required: true})}
                                type={'password'}
                            />
                            {errors.password && (
                                <Error>{errors.password?.message}</Error>
                            )}
                        </GroupPassword>
                    </FlexColumn>

                    <FlexColumn flex={1} responsive={'row'}>
                        <GroupPhone>
                            <Label htmlFor='phone'>Phone</Label>
                            <Input
                                {...register('phone', {required: true})}
                                type={'tel'}
                                placeholder={'(83) 00000-0000'}
                                onChangeCapture={(e) => phoneMask(e)}
                            />
                            {errors.phone && (
                                <Error>{errors.phone?.message}</Error>
                            )}
                        </GroupPhone>

                        <GroupBirthday>
                            <Label htmlFor='birthday'>Birthday *</Label>
                            <Input
                                {...register('birthday', {required: true})}
                                type={'date'}
                            />
                            {errors.birthday && (
                                <Error>{errors.birthday?.message}</Error>
                            )}
                        </GroupBirthday>
                    </FlexColumn>
                </FlexRow>

                <FlexRow>
                    <Checkbox
                        label='I accept the terms and privacy'
                        {...{register: register('checkbox')}}
                    />
                    {errors.checkbox && (
                        <CheckmarkError>
                            {errors.checkbox?.message}
                        </CheckmarkError>
                    )}
                    <Button
                        width='80px'
                        height='40px'
                        fontSize='16px'
                        r_FontSize='18px'
                        type='submit'
                    >
                        Register
                    </Button>
                </FlexRow>
            </Form>
        </Container>
    );
};

const Form = styled.form``;

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

    @media (max-width: 768px) {
        flex-direction: ${({responsive}) => responsive};
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`;

const GroupName = styled(FormGroup)``;

const GroupEmail = styled(FormGroup)`
    margin-right: 25px;

    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

const GroupPassword = styled(FormGroup)`
    margin-right: 25px;

    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

const GroupPhone = styled(FormGroup)`
    @media (max-width: 768px) {
        width: 50%;
        flex: 1;
        margin-right: 25px;
        margin-bottom: 25px;
    }
`;

const GroupBirthday = styled(FormGroup)`
    max-height: 69px;

    @media (max-width: 768px) {
        width: calc(50% - 15px);
        flex: 1;
        margin-bottom: 25px;
    }
`;

const Error = styled.span`
    color: red;
    font-size: 14px;
    position: absolute;
    margin-top: 70px;
`;

const CheckmarkError = styled(Error)`
    margin-top: 30px;
`;
