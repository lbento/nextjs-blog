import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

import {
    KeyboardDatePicker,
  } from '@material-ui/pickers';

  
export const DatePickerContainer = styled(KeyboardDatePicker)`
    margin-top: 25px !important;
`;

export const themeDate = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5900'
    }
  }
})