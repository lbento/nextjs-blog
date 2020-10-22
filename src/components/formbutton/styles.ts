import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    text-align: center;
`;

export const CustomButton = styled(Button)`
    text-transform: none !important;
    background-color: ${props => props.background}${props => props.disabled ? '66' : 'FF'} !important;
    font-weight: 700 !important;
    color: #fff !important;
    margin-top: 30px !important;
    height: 50px;
    width: 45%;

    div {
        color: ${props => props.background};
    }

    @media(max-width: 599px) {
        width: 100%;
    }
`;