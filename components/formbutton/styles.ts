import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    text-align: center;
`;

export const CustomButton = styled(Button)`
    text-transform: none !important;
    background-color: ${props => props.background} !important;
    font-weight: 700 !important;
    color: #fff !important;
    margin-top: 18px !important;
    opacity: ${props => props.disabled ? '0.4' : '1'};
    height: 50px;
    width: 45%;

    @media(max-width: 599px) {
        width: 100%;
    }
`;