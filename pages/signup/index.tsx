import React, { useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import From from '../../components/form';
import { useRouter } from 'next/router'

const Signup: React.FC<any> = () => {
  const router = useRouter();

  const handleSubmit = data => {
    router.push({
      pathname: '/additional-information',
      query: { email: data.email, password: data.password }
    });
  }

  const initialState = {eight: false,
    lower: false,
    upper: false,
    number: false,
    symbol: false}

  const [state, setState] = useState({...initialState}); 

  const checkPassword = data => {
    var pass = data.target.value;

    let states = {...state}
    states.eight = pass.length > 8 ? true : false;
    states.lower = /[a-z]/.test(pass) ? true : false;
    states.upper = /[A-Z]/.test(pass) ? true : false;
    states.number = /[0-9]/.test(pass)? true : false;
    states.symbol = /[!@#$%^&*]/.test(pass) ? true : false;

    setState(states);

  }

  const styles = {
    sucess: { backgroundColor: '#43A047' , color: '#fff', borderRadius: '4px' , margin: '2px', padding: '9px 6px', fontSize: '10px'},
    info: { backgroundColor: '#F5F5F5' , color: '#A4A3AF', borderRadius: '4px', margin: '2px', padding: '9px 6px', fontSize: '10px'}
  }

  return (
    <Layout>
        <CustomCard title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
            <From onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Crie uma senha" onChange={checkPassword} />
                <br/><label style={{textAlign: "start", fontSize: '12px', color: '#535161'}}>Sua senha precisa conter:</label><br/>
                <span style={state.upper ? styles.sucess : styles.info}>Letra maiúscula</span>
                <span style={state.lower ? styles.sucess : styles.info}>Letra minúscula</span>
                <span style={state.number ? styles.sucess : styles.info}>Valor numérico</span>
                <span style={state.symbol ? styles.sucess : styles.info}>Um caractere especial dentre @ # $ & % ^ + =</span>
                <span style={state.eight ? styles.sucess : styles.info}>Ao menos 8 digitos</span>
                <br/>
                <Button type={'submit'} disabled={false}>Continuar</Button>
                </From>
        </CustomCard>
    </Layout>
  );
}

export default Signup;
