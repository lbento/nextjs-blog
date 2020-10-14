import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export const HeaderRow = styled(AppBar)`
min-height: 130px;
background-color: #ff5900 !important;
flex-direction: column;
.MuiGrid-root{
    display: flex;
}
`;

export const MenuItens = styled.a`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
color: #FFFFFF;
margin-right: 20px;
margin-bottom:20px;
cursor: pointer;
`;

export const Image = styled.img`
width: 123.93px;
height: 73px;
margin-left: 165px;
margin-top: 37px;
`;