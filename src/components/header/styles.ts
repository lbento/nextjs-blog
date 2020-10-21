import styled from 'styled-components';
import { Drawer, Grid, AppBar } from '@material-ui/core';

export const HeaderRow = styled(AppBar)`
    min-height: 115px;
    padding: 20px 8%;
    background-color: ${props => props.background} !important;
    box-shadow: none !important;
    margin-bottom: 60px;
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

export const CustomDrawer = styled(Drawer)`
    & > div:nth-child(3) {
        background-color: ${props => props.background} !important;
        color: ${props => props.fontcolor} !important;
        cursor: pointer;
        font-weight: 600;
    }
`;