import styled from 'styled-components';

export const Form = styled.form``;

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${({flex}) => flex};

    @media (max-width: 768px) {
        flex-direction: ${({responsive}) => responsive};
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`;

export const GroupName = styled(FormGroup)``;

export const GroupEmail = styled(FormGroup)`
    margin-right: 25px;

    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

export const GroupPassword = styled(FormGroup)`
    margin-right: 25px;

    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

export const GroupPhone = styled(FormGroup)`
    @media (max-width: 768px) {
        width: 50%;
        flex: 1;
        margin-right: 25px;
        margin-bottom: 25px;
    }
`;

export const GroupBirthday = styled(FormGroup)`
    max-height: 69px;

    @media (max-width: 768px) {
        width: calc(50% - 15px);
        flex: 1;
        margin-bottom: 25px;
    }
`;

export const Error = styled.span`
    color: red;
    font-size: 14px;
    position: absolute;
    margin-top: 70px;
`;

export const CheckmarkError = styled(Error)`
    margin-top: 30px;
`;
