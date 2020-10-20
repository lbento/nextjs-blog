import React, { useRef, useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import { useRouter } from 'next/router'
import PasswordRequirements from '../../components/passwordrequirements';
import * as Yup from 'yup';
import { Form } from '@unform/web';	

const Signup: React.FC<any> = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async data => {
    try {
 
     formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup
          .string()
          .email('O e-mail digitado é inválido. Tente novamente')
          .required('o e-mail é obrigatório'),
        password: Yup
          .string()
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/, 'A senha precisa seguir os requisitos listados abaixo')
          .min(8, 'A senha precisa ter no minimo 8 caracteres')
          .required("A senha é obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
 
      router.push({
        pathname: '/additional-information',
        query: { email: data.email, password: data.password }
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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
    states.eight = pass.length >= 8 ? true : false;
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

  return (
    <Layout>
      <CustomCard title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" isPassword={true} type='password' placeholder="Crie uma senha" onChange={checkPassword} />
          <PasswordRequirements>
            <p>Sua senha precisa conter:</p>
            <div style={state.upper ? styles.sucess : styles.info}>Letra maiúscula</div>
            <div style={state.lower ? styles.sucess : styles.info}>Letra minúscula</div>
            <div style={state.number ? styles.sucess : styles.info}>Valor numérico</div>
            <div style={state.symbol ? styles.sucess : styles.info}>Um caractere especial dentre @ # $ & % ^ + =</div>
            <div style={state.eight ? styles.sucess : styles.info}>Ao menos 8 digitos</div>
          </PasswordRequirements>
          <Button type={'submit'} disabled={false}>Continuar</Button>
        </Form>
      </CustomCard>
    </Layout>
  );
}

export default Signup;
