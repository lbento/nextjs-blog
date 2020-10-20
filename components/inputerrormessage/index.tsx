import React from 'react';
import { ErrorMessage } from './styles';

export default function InputErrorMessage({ children }) {

  return <ErrorMessage errorColor={"#f00"}>{children}</ErrorMessage> 

}