import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { Checkbox } from '@material-ui/core';
import { CustomFormControlLabel } from './styles';
import InputErrorMessage from '../inputerrormessage';

export default function CustomCheckbox({ name, isChecked = null, changing = null, children, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [checked, setState] = useState(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
    if(changing !== null) {
        changing(event.target.checked);
    }
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: any) => {
          return ref.value === "true" ? true : false;
      }
    });
  }, [fieldName, registerField]);

  useEffect(() => {
      if(isChecked != null) {
          setState(isChecked)
      }
    });

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