import React from 'react';
import { CustomButton, ButtonContainer } from './styles';

const Button: React.FC<any> = ({
    type,
    disabled,
    children
}) => {
      
  return (
       <ButtonContainer>
            <CustomButton type={type} variant="contained" background={"#ff5900"} disabled={disabled}>
            {children}
            </CustomButton>
        </ButtonContainer>
  )
}

export default Button;