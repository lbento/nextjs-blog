import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const GridContainer = styled(Grid)`
    margin-top: 35px !important;
    margin-bottom: 25px !important;
`;

export const FlagWrapper = styled.div`
    background-color: #EEEDF1;
    width: 56px;
    height: 32px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;

    img {
        display: inline-block;
        vertical-align: middle;
    }
`;

