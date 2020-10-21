import React, { useRef, useState, useEffect } from 'react';
import 'date-fns';
import ptbrLocale from "date-fns/locale/pt-BR";
import { useField } from '@unform/core';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputErrorMessage from '../inputerrormessage';
import { DatePickerContainer, themeDate } from './styles';
import { ThemeProvider } from "@material-ui/styles";

const DatePicker: React.FC<any> = ({ name, ...rest }) => {

  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState<Date | null>(defaultValue || new Date());

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'value',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);


  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptbrLocale}>
        <ThemeProvider theme={themeDate}>

          <DatePickerContainer
            label={rest.placeholder}
            format="dd/MM/yyyy"
            inputVariant="outlined"
            inputRef={datepickerRef}
            error={error ? true : false}
            value={date}
            onChange={setDate}
            fullWidth
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </ThemeProvider>

      </MuiPickersUtilsProvider>
      { error && <InputErrorMessage>{error}</InputErrorMessage>}
    </>
  );
};
export default DatePicker;