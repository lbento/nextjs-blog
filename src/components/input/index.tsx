import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { CustomTextField  } from './styles';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import InputErrorMessage from '../inputerrormessage';
import InputMask, { Props as InputProps } from 'react-input-mask';

export default function Input({ name, isPassword = false, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  const [inputType, setValue] = useState(rest.type);

  const handleClickShowPassword = () => {
    const typechanged = inputType === 'text' ? 'password' : 'text';
    setValue(typechanged);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  const isPassowordInput = () => {
      if(isPassword) {
        return (
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                >
                    {inputType === 'text' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        )
      }

      return ;
  }

  return (
    <>
    <InputMask mask={rest.mask} maskChar={null} onChange={rest.onChange}>
        {(inputProps: any) => (
                <CustomTextField 
                variant="outlined" 
                label={rest.placeholder} 
                inputRef={inputRef} 
                defaultValue={defaultValue}
                error={error ? true : false}
                {...rest} 
                type={isPassword? inputType : rest.type}
                InputProps={{
                    endAdornment: isPassowordInput()
                }}
                fullWidth 
            />
        )}

    </InputMask>
    { error && <InputErrorMessage>{error}</InputErrorMessage>  }
    </>
  ) 

}