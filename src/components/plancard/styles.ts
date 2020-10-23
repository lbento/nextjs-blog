import { Card, CardContent } from '@material-ui/core'
import styled from 'styled-components';

export const CustomCard = styled(Card)`
    padding: 30px 10px;
    margin: 30px 10px;
    width: 90%;
    height: 300px;
`;

export const CustomContent = styled(CardContent)`
    height: 155px;
    padding: 0px !important;
`;