import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from '../../utils/yupSchema';
import {phoneMask} from '../../utils/phoneMask';

import {
    Form,
    FlexRow,
    FlexColumn,
    GroupBirthday,
    GroupEmail,
    GroupName,
    GroupPassword,
    GroupPhone,
    Error,
    CheckmarkError,
} from './Home.styled';

import {
    Container,
    Input,
    Label,
    Image,
    Button,
    Checkbox,
    Title,
} from '../../components';

export const Home = () => {
    const navigate = useNavigate();

    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (formData) => {
        localStorage.setItem('data', JSON.stringify(formData));
        navigate('/success');
    };

    const unload = () => {
        localStorage.setItem('data', JSON.stringify(getValues()));
    };

    const getLocalStorage = () => {
        if (localStorage.getItem('data')) {
            const data = JSON.parse(localStorage.getItem('data'));
            const keys = Object.keys(data);
            keys.forEach((key) => {
                setValue(key, data[key]);
            });
        }
    };

    useEffect(() => {
        getLocalStorage();
        window.addEventListener('beforeunload', unload);
        return () => {
            window.removeEventListener('beforeunload', unload);
        };
    }, []);

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
