import styled from 'styled-components';
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';

export const Card_ = styled(Card)`
border: 1px solid rgba(164, 163, 175, 0.24);
display: inline-block;
width: 780px !important;
height: 560px !important;
justify-content: center;
align-items: center;
text-align: center;
margin: 60px 0px 60px 0px;
`;

export const CardContent_ = styled(CardContent)`

`;

export const CardActions_ = styled(CardActions)`

`;

export const CardHeader_ = styled(CardHeader)`
margin: 40px !important;
.MuiTypography-displayBlock{
    display: flex;
}
.MuiTypography-h5{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold !important;
    font-size: 30px;
    line-height: 41px;
    color: #535161;
}
`;