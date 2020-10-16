import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { CustomTextField } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [state, setState] = useState({value: ""});
    
  const handleChange = (event) => {
    setState({value: event.target.value});
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <CustomTextField 
            variant="outlined" 
            label={rest.placeholder} 
            inputRef={inputRef} 
            defaultValue={defaultValue}
            value={state.value} 
            onChange={handleChange}
            {...rest} 
            fullWidth 
        />;
}