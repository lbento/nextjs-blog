import styled from 'styled-components';
import { Drawer, Grid, AppBar, Button } from '@material-ui/core';

export const HeaderRow = styled(AppBar)<{ background: string }>`
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

export const GridHeader = styled(Grid)<{ align: string, absoluteRow: boolean }>`
    text-align: ${props => props.align};
    ${({absoluteRow}) => absoluteRow && `
        position: absolute;
        top: 20px;
        right: 8%;
    `};
`;

export const CustomDrawer = styled(Drawer)<{ background: string, fontcolor: string }>`
    & > div:nth-child(3) {
        background-color: ${props => props.background} !important;
        color: ${props => props.fontcolor} !important;
        cursor: pointer;
        font-weight: 600;
    }
`;

export const CustomButton = styled(Button)<{ background: string, fontcolor: string }>`
    background-color: ${props => props.background} !important;
    color: ${props => props.fontcolor} !important;
    font-size: 14px !important;
    border-radius: unset !important;
    margin-left: 10px !important;
    font-weight: 600 !important;
    height: 32px;
    text-transform: initial !important;
`;