import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export const GridRow = styled(Grid)`
flex-direction: row !important;

justify-content: ${props => props.theme.justify};
align-items: ${props => props.theme.align}
`;

GridRow.defaultProps  = {
    theme:{
        justify: "flex-start",
        align: "flex-start",
    }
};

export const GridRight = {
    justify: "flex-end",
    align: "flex-end",
};

export const GridCenter = {
    justify: "center",
    align: "center"
};

//header - body - footer
