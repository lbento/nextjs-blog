import React from 'react';
import { Input_, TextField_ } from './input.styles';

interface InputCustomProps {
    placeholder: string;
}

const InputCustom : React.FC<InputCustomProps> = ({
    placeholder
}) => {
    return (
        <TextField_ placeholder={placeholder} variant="outlined" label={placeholder} onChange={event => {
            const { value } = event;

        }}></TextField_>
    )
}

export default InputCustom;

