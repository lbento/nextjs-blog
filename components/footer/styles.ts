import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const FooterRow = styled.footer`
    margin-top: 60px;
    background-color: #ff5900;
`;

export const MenuRow = styled(Grid)`
    min-height: 140px;
    padding: 30px 8%;

    @media(max-width: 599px) {
        text-align: center;
    }
`;

export const MenuBaixar = styled(Grid)`
    min-height: 185px;
    padding: 30px;
    background-color: #2E2E2E;
`;

export const Image = styled.img`
    min-width: 218px;
    min-height: 62px;
    display: initial;

    @media(max-width: 599px) {
        margin-bottom: 20px;
    }
`;

export const MenuItens = styled.a`
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    margin-top: 4px;
`;
