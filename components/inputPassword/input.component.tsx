import React from 'react';
import { Input_, TextField_ } from './input.styles';
import PasswordField from 'material-ui-password-field';
import {verifyPass}from './input.func';

interface InputCustomProps {
    placeholder: string;
    password: string;
}

const InputCustom: React.FC<InputCustomProps> = ({
    placeholder,
    password
}) => {

    return (
        <TextField_ placeholder={placeholder} type="password" label={placeholder}
            value={password} onChange={ verifyPass()} id="id"></TextField_>
    )

}
export default InputCustom;


