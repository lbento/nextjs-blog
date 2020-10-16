import React, { useRef, useState, useEffect } from 'react';
import 'date-fns';
import ptbrLocale from "date-fns/locale/pt-BR";
import { useField } from '@unform/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

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
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptbrLocale}>
        <KeyboardDatePicker 
            margin="normal"
            label={rest.placeholder}
            format="dd/MM/yyyy"
            inputVariant="outlined"
            inputRef={datepickerRef}
            value={date}
            onChange={setDate}
            fullWidth
            KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
};
export default DatePicker;