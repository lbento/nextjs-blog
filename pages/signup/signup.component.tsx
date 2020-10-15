import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/card/card.component';
import InputPassword from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField } from '@material-ui/core';
import { useRouter } from 'next/router'
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import { Form } from '@unform/web';

const Signup: React.FC<any> = () =>  {

    function handleSubmit(data) {
        console.log(data);
        // { email: 'test@example.com', password: '123456' }
      }

    const router = useRouter() ;

    const onsubmitHandler = event => {
        event.preventDefault();
        console.log('submeeeet');
        router.push("/personal-information")
    }
    return (
        <>
            <CustomCard  title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
                <FormControl>
                    <TextField placeholder='E-mail' variant="outlined" label='E-mail'></TextField><br/>
                    {/* <InputPassword placeholder="Crie uma senha" ></InputPassword> */}
                    <button type="submit" onClick={onsubmitHandler}>
                    Submit
                    </button>
                </FormControl>
            </CustomCard>

            <CustomCard  title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
                <Form onSubmit={handleSubmit}>
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input name="password" type="password" placeholder="Crie uma senha"/>
                    <button type="submit">Sign in</button>
                </Form>
            </CustomCard>
        </>
    );
}

export default Signup;
