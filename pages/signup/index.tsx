import React, { useState } from 'react';
import Card from '../../components/card/card.component';
import InputPassword from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField } from '@material-ui/core';
import { useRouter } from 'next/router'
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import { CustomForm } from './styles';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';

const Signup: React.FC<any> = () =>  {

    const initialState = {
        email: "",
        password: "",
      };

    const [step, changeStep] = useState(1);
    const [{email, password}, setState] = useState(initialState);

    const handleSubmit = data => {
        console.log(data);
        changeStep(2);
        setState(data);
      }

    const onsubmitHandler = data => {
      console.log(data)
        console.log('submeeeet');
    }

    const renderAuthButton = ()=>{
        if(step === 1){
          return (
            <CustomCard  title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
                <CustomForm onSubmit={handleSubmit}>
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input name="password" type="password" placeholder="Crie uma senha"/>
                    <Button type={'submit'} disabled={false}>Continuar</Button>
                </CustomForm>
            </CustomCard>
          )
        } else{
          return (
            <CustomCard title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'} >
                <CustomForm onSubmit={onsubmitHandler}>
                    <Input name="name" type="text" placeholder="Nome completo" />
                    <Input name="cpf" type="text" placeholder="CPF"/>

                    <Input name="phone" type="text" placeholder="Celular"/>
                    <Button type={'submit'} disabled={false}>Continuar</Button>
                </CustomForm>
            </ CustomCard>
          )
        }
      }

    return (
      <Layout>
            {renderAuthButton()}
      </Layout>
    );
}

export default Signup;