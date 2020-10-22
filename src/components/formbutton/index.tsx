import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { CustomButton, ButtonContainer } from './styles';

const Button: React.FC<any> = ({
    type,
    disabled,
    children
}) => {
      
  return (
       <ButtonContainer>
            <CustomButton type={type} variant="contained" background={"#EC7000"} disabled={disabled}>
            {!disabled && children}
            {disabled && <CircularProgress size={24} />}
            </CustomButton>
            
        </ButtonContainer>
  )
}

export default Button;