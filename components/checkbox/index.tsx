import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { Checkbox } from '@material-ui/core';
import { CustomFormControlLabel } from './styles';
import InputErrorMessage from '../inputerrormessage';

export default function CustomCheckbox({ name, children, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [checked, setState] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: any) => {
          return ref.value === "true" ? true : false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
        <CustomFormControlLabel
        control={<Checkbox checked={checked} value={checked} inputRef={inputRef} onChange={handleChange} name={name} />}
        label={children}
        checkedcolor={'#EC7000'} 
        />
        { error && <InputErrorMessage>{error}</InputErrorMessage>  }
    </>
  );
}