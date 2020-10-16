import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const CustomButton = styled(Button)`
    color: ${props => props.fontcolor} !important;
    font-weight: bold !important;
    text-transform: none !important;
`;