import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { CustomTextField } from './styles';

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

  return <CustomTextField variant="outlined" label={rest.placeholder} inputRef={inputRef} defaultValue={defaultValue} {...rest} fullWidth />;
}