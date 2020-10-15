import React from 'react';
import Card from '../../components/card/card.component';
import Input from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField } from '@material-ui/core';

export default props => {
    return (
        <>
            <Card title="Cadastro" subheader="Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.">
                <FormControl>
                    <TextField placeholder='E-mail' variant="outlined" label='E-mail'></TextField><br/>
                    <Input placeholder="Crie uma senha" ></Input>
                </FormControl>
            </Card>
        </>
    );
}