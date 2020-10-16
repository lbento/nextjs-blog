import { FormControlLabel } from '@material-ui/core'
import styled from 'styled-components';

export const CustomFormControlLabel = styled(FormControlLabel)`
    width: 100%;
    text-align: left;

    > span > span {
        color: ${props => props.checkedcolor};
    }

    span:last-child {
        font-size: 0.7rem;
    }
`;