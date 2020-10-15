import React from 'react';
import { Input_, TextField_ } from './input.styles';
import PasswordField from 'material-ui-password-field';

interface InputCustomProps {
    placeholder: string;
}

const InputCustom: React.FC<InputCustomProps> = ({
    placeholder
}) => {
    return (
        <PasswordField hintText="Crie uma senha" floatingLabelText="Crie uma senha" errorText="Your password is too short" />
    )
}

export default InputCustom;

