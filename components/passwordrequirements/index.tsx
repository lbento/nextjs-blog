import React from 'react';
import { CustomContainer } from './styles';

const PasswordRequirements: React.FC<any> = ({
    children
}) => {
  return (
    <CustomContainer>
    {children}
    </CustomContainer>
  )
}

export default PasswordRequirements;