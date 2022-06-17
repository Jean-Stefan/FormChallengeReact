import styled from 'styled-components';

export const Checkbox = ({label, name, onChange, register}) => {
    return (
        <CustomCheckbox>
            <HiddenCheckbox
                type='checkbox'
                name={name}
                onChange={onChange}
                {...register}
            />
            <Checkmark />
            <Terms children={label} />
        </CustomCheckbox>
    );
};

const Checkmark = styled.span`
    width: 20px;
    height: 20px;
    border: 2px solid #a5a5a5;
    display: inline-block;
    border-radius: 2px;
    background: #ffffff
        url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
        center/1250% no-repeat;
`;

const CustomCheckbox = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    input:checked + ${Checkmark} {
        background-color: #0dbdbd;
        border-color: #0dbdbd;
        background-size: 60%;
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

const HiddenCheckbox = styled.input`
    display: none;
`;

const Terms = styled.span`
    margin: 0 5px;
    display: inline-block;
`;
