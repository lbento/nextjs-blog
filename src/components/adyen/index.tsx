import React from 'react';
import { DivContainer } from './styles';

const Adyen: React.FC<any> = ({
    componentRef,
}) => {
      
  return (
       <DivContainer ref={componentRef} background="#EC7000"/>
  )
}

export default Adyen;