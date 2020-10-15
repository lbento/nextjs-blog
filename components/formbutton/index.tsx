import React from 'react';
import { CustomButton } from './styles';

const Button: React.FC<any> = ({
    type,
    disabled,
    children
}) => {
      
  return (
    <CustomButton type={type} variant="contained" background={"#ff5900"} disabled={disabled}>
    {children}
    </CustomButton>
  )
}

export default Button;