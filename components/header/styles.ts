import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const HeaderRow = styled(AppBar)`
    min-height: 130px;
    padding: 28px 8%;
    background-color: #ff5900 !important;
`;

export const MenuItens = styled.a`
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const Image = styled.img`
    min-width: 120px;
    min-height: 70px;
`;

export const GridHeader = styled(Grid)`
    text-align: ${props => props.align};
`;