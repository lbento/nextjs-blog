import React, { useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import * as Yup from 'yup';
import From from '../../components/form';
import { AddPhotoAlternateTwoTone } from '@material-ui/icons';

const Signup: React.FC<any> = () => {

  const initialStateFirstStep = {
    email: "",
    password: ""
  };

  const initialStateSecondStep = {
    name: "",
    cpf: "",
    phone: ""
  }

  const [step, changeStep] = useState(1);
  const [{ email, password }, setStateFirst] = useState(initialStateFirstStep);
  const [{ name, cpf, phone }, setStateSecond] = useState(initialStateSecondStep);

  const handleSubmit = data => {
    console.log(data);
    changeStep(2);
    setStateFirst({ ...data });
  }

  const onsubmitHandler = data => {
    console.log(data)
    console.log('submeeeet');
  }

  const checkPassword = data => {
    var pass = data.target.value ;

    if(pass.length < 8){
      console.log("Your password needs a minimum of eight characters")
    }else if (pass.search(/[a-z]/) < 0){
      console.log("Your password needs a lower case letter")
    }else if(pass.search(/[A-Z]/) < 0){
      console.log("Your password needs an uppser case letter")
    }else if(pass.search(/[0-9]/) < 0){
      console.log("Your password needs a number")
    }else if(pass.search(/[!@#$%^&*]/) < 0){
      console.log("Your password needs a symbol")
    }else {
      console.log('tudo pronto!')
    }

  }

  const renderAuthButton = () => {
    if (step === 1) {
      return (
        <CustomCard title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
          <From onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Crie uma senha" onChange={checkPassword} />
            <Button type={'submit'} disabled={false} id="idButton">Continuar</Button>
          </From>
        </CustomCard>
      )
    } else {
      return (
        <CustomCard title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'} >
          <From onSubmit={onsubmitHandler}>
            <Input name="name" type="text" placeholder="Nome completo" />
            <Input name="cpf" type="text" placeholder="CPF" />

            <Input name="phone" type="text" placeholder="Celular" />
            <Button type={'submit'} disabled={false}>Continuar</Button>
          </From>
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
