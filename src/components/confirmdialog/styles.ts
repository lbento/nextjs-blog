import styled from 'styled-components';
import { Button, DialogActions } from '@material-ui/core';

export const CustomButton = styled(Button)`
    background: ${props => props.background} !important;
    color: #fff !important;
    font-weight: bold !important;
    text-transform: none !important;
    padding: 10px 20px !important;
`;

export const CustomDialogActions = styled(DialogActions)`
    padding: 30px !important;
    justify-content: center !important;
`;