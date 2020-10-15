import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { OutlinedInput , TextField } from '@material-ui/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <TextField variant="outlined" label={rest.placeholder} inputRef={inputRef} defaultValue={defaultValue} {...rest} fullWidth />;
}