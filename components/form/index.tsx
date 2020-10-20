import React from 'react';
import { CustomForm } from './styles';

const From: React.FC<any> = ({
    onSubmit,
    formRef,
    children
}) => {
  return (
    <CustomForm onSubmit={onSubmit} ref={formRef}>
    {children}
    </CustomForm>
  )
}

export default From;