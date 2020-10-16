import React, { useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import From from '../../components/form';
import { useRouter } from 'next/router'
import PasswordRequirements from '../../components/passwordrequirements';
import * as yup from 'yup';

const Signup: React.FC<any> = () => {
  const router = useRouter();

  const handleSubmit = data => {
    schema
      .isValid(data).then(valid => {
        
        if (valid) {
          console.log('boa')

          router.push({
            pathname: '/additional-information',
            query: { email: data.email, password: data.password }
          });

        } else {
          console.log('ah n')
        }
      })
  }

  const initialState = {
    eight: false,
    lower: false,
    upper: false,
    number: false,
    symbol: false
  }

  const [state, setState] = useState({ ...initialState });

  const checkPassword = data => {
    var pass = data.target.value;

    let states = { ...state }
    states.eight = pass.length > 8 ? true : false;
    states.lower = /[a-z]/.test(pass) ? true : false;
    states.upper = /[A-Z]/.test(pass) ? true : false;
    states.number = /[0-9]/.test(pass) ? true : false;
    states.symbol = /[!@#$%^&*]/.test(pass) ? true : false;

    setState(states);

  }

  const styles = {
    sucess: { backgroundColor: '#43A047', color: '#fff' },
    info: { backgroundColor: '#F5F5F5', color: '#A4A3AF' }
  }

  //check valid
  let yup = require('yup');

  let schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .required("Required")
  })

  const validateForm = data => {
    schema.email = data.target.value;
    console.log(schema.email)
  }


  return (
    <Layout>
      <CustomCard title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
        <From onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="E-mail" required />
          <Input name="password" type="password" placeholder="Crie uma senha" onChange={checkPassword} minlength="8" required />
          <PasswordRequirements>
            <p>Sua senha precisa conter:</p>
            <div style={state.upper ? styles.sucess : styles.info}>Letra maiúscula</div>
            <div style={state.lower ? styles.sucess : styles.info}>Letra minúscula</div>
            <div style={state.number ? styles.sucess : styles.info}>Valor numérico</div>
            <div style={state.symbol ? styles.sucess : styles.info}>Um caractere especial dentre @ # $ & % ^ + =</div>
            <div style={state.eight ? styles.sucess : styles.info}>Ao menos 8 digitos</div>
          </PasswordRequirements>
          <Button type={'submit'} disabled={false}>Continuar</Button>
        </From>
      </CustomCard>
    </Layout>
  );
}

export default Signup;
