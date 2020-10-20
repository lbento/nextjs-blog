import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { CustomTextField } from './styles';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import InputErrorMessage from '../inputerrormessage';
import { cpf } from './mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: "cpf"
}

//: React.FC<InputProps> = ({name, isPassword = false, mask, ...rest}) => 
export default function Input ({ name, isPassword = false, mask, ...rest }) {

  const handleKey = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if(mask == 'cpf'){
      cpf(inputRef.current);
    }
  },[mask]
  );

const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  //const [state, setState] = useState({value: ""});
  
  const [inputType, setValue] = useState(rest.type);
    
//   const handleChange = (event) => {
//     setState({value: event.target.value});
//   }

  const handleClickShowPassword = () => {
    const typechanged = inputType === 'text' ? 'password' : 'text';
    setValue(typechanged);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
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
        <CustomTextField 
            variant="outlined" 
            label={rest.placeholder} 
            inputRef={inputRef} 
            defaultValue={defaultValue}
            onKeyUp={handleKey}
            error={error ? true : false}
            //value={state.value} 
           //onChange={handleChange}
            {...rest} 
            type={isPassword? inputType : rest.type}
            InputProps={{
                endAdornment: isPassowordInput()
            }}
            fullWidth 
        />
        { error && <InputErrorMessage>{error}</InputErrorMessage>  }
    </>
  ) 

}