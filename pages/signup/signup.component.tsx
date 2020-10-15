import React from 'react';
import Card from '../../components/card/card.component';
import Input from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField } from '@material-ui/core';
import axios from 'axios';

export default props => {
    let email = '';
    let senha = '';

    const handleChange = event => {
        console.log(event.target.name)
        if(event.target.name == 'email'){
            email = event.target.value;
        }

        if(event.target.name == 'senha') {
            senha = event.target.value;
        }
        //setState({ name: event.target.value });
      }


    const handleSubmit = async event => {
        event.preventDefault();
    
        const user = {
            login: email,
            password: senha
          };

          console.log(user)
    
        const res = await axios.post(`https://virtserver.swaggerhub.com/garusocruz/test/1.0.0/api/legacy/account/signin`, { user })
 
        console.log(res);
        console.log(res.data);
       
      } 
    return (
        <>
            <Card title="Cadastro" subheader="Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.">
                <FormControl>
                    <TextField placeholder='E-mail' variant="outlined" name="email" label='E-mail' onChange={handleChange}></TextField><br/>
                    <TextField placeholder='Senha' variant="outlined" name="senha" label='Senha' onChange={handleChange}></TextField><br/>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </FormControl>
            </Card>
        </>
    );
}