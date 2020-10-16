import React from 'react';
import { CustomForm } from './styles';

const From: React.FC<any> = ({
    onSubmit,
    children
}) => {
  return (
    <CustomForm onSubmit={onSubmit}>
    {children}
    </CustomForm>
  )
}

export default From;