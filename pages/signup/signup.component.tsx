import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/card/card.component';
import InputPassword from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField, Box } from '@material-ui/core';
import { useRouter } from 'next/router'
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import { Form } from '@unform/web';
import { sendStatusCode } from 'next/dist/next-server/server/api-utils';
// import { SignupModal } from './signup.modal';

const Signup: React.FC<any> = () =>  {
    const visible1 = "visible";
    const visible2 = "visible";

    const [ visibleForm, setVisibleForm ] = useState(1);
    const [ cad, setCad ] = useState();

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
        {/* <TextField placeholder='E-mail' variant="outlined" label='E-mail'></TextField><br/> */}
        {/* <InputPassword placeholder="Crie uma senha" ></InputPassword> */}
            <CustomCard  title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
                <FormControl onSubmit={e => {
                    setCad({
                        email: e.value.email,
                        password: e.value.password,
                        name: e.value.name,
                        phone: e.value.phone
                    })
                }}>
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input name="password" type="password" placeholder="Crie uma senha"/>
                    <button >
                    next
                    </button>
                    <Input name="celular"  placeholder="celular" visibility="hidden"/>
                    <Input name="nascimento"  placeholder="nascimento" />
                    <Input name="nacionalidade"  placeholder="nacionalidade" />
                    <Input name="cpf"  placeholder="cpf" />
              
              
                    <button type="submit">Sign in</button>
                </FormControl>
            </CustomCard>
        </>
    );
}

export default Signup;
