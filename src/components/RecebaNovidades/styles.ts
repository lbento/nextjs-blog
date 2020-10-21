import { Grid, Button, TextField } from '@material-ui/core';
import { Form as Unform } from '@unform/web';	
import styled from 'styled-components';

export const RecebaNovidadesRow = styled(Grid)`
    min-height: 100px;
    background-color: #004990;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    padding: 34px 8%;

    @media(max-width: 599px) {
        text-align: center;
    }
`;

export const CustomButton = styled(Button)`
    text-transform: none !important;
    background-color: ${props => props.background} !important;
    font-weight: 600 !important;
    color: #fff !important;
    opacity: ${props => props.disabled ? '0.6' : '1'};
    height: 40px;
    padding: 0px 24px !important;
    border-radius: 0px !important;
    margin-left: 20px !important;

    @media(max-width: 853px) {
        width: 100%;
        margin-left: 0 !important;
        margin-top: 10px !important;
    }
`;

export const CustomTextField = styled(TextField)`
    vertical-align: unset !important;
    background: #fff;

    div {
        border-radius: 0px !important;
        height: 40px;
    }

    @media(max-width: 599px) {
        margin-top: 15px !important;
        width: 100%;
    }

    @media(max-width: 853px) {
        width: 100%;
    }
`;

export const CustomForm = styled(Unform)`
    text-align: right;
`;