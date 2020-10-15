import React from 'react';
import { Input_, TextField_ } from './input.styles';
import PasswordField from 'material-ui-password-field';

interface InputCustomProps {
    placeholder: string;
    name: string;
}

const handleChange = event => {
    const password = event.target.value;
    password.array.forEach(element => {
        console.log(element)
    });
}

const InputCustom: React.FC<InputCustomProps> = ({
    placeholder, name
}) => {

    return (
        <TextField_ name={name} placeholder={placeholder} type="password" label={placeholder}
      onChange={handleChange} id="id"></TextField_>
    )

}
export default InputCustom;


