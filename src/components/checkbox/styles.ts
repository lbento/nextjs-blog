import { FormControlLabel } from '@material-ui/core'
import styled from 'styled-components';

export const CustomFormControlLabel = styled(FormControlLabel)`
    width: 100%;
    text-align: left;
    margin-top: 25px;
    margin-bottom: -10px;

    > span > span {
        color: ${props => props.checkedcolor};
    }

    span:last-child {
        font-size: 0.7rem;
    }
`;