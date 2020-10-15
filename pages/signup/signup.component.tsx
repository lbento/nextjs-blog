import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/card/card.component';
import Input from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField } from '@material-ui/core';


// import { reduxForm } from 'redux-form';
// import asyncValidate from './asyncValidate'

export default props => {

    return (
        <>
            <Card title="Cadastro" subheader="Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.">
                <form >
                    <TextField name="email" placeholder='E-mail' variant="outlined" label='E-mail'></TextField><br />
                    <Input name="password" placeholder="Crie uma senha" ></Input>
                    <button type="submit" >envia</button>
                </form>
            </Card>
        </>
    );
}

// export default reduxForm({
//     form: 'MaterialUiForm'
// })(MaterialUiForm)