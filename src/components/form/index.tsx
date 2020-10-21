import React from 'react';
import { CustomForm } from './styles';

const From: React.FC<any> = ({
    onSubmit,
    ref,
    children
}) => {
  return (
    <CustomForm onSubmit={onSubmit} ref={ref}>
    {children}
    </CustomForm>
  )
}

export default From;