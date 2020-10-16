import React, { useRef, useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import * as Yup from 'yup';
import From from '../../components/form';
import CustomSelect from '../../components/select';
import CustomDialog from '../../components/dialog';
import DatePicker from '../../components/datepicker';
import axios from 'axios';
import { useRouter } from 'next/router'
import Chip from '@material-ui/core/Chip';

const Signup: React.FC<any> = () => {
  const router = useRouter();
  const initialStateFirstStep = {
    email: "",
    password: ""
  }

  const initialStateSecondStep = {
    name: "",
    cpf: "",
    phone: "",
    nationality: ""
  }

  const [open, setOpen] = React.useState(false);

  const handleSubmit = data => {
    console.log(data);
    changeStep(2);
    setStateFirst({ ...data });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    router.push('/');
  };

  const [step, changeStep] = useState(1);
  const [{ email, password }, setStateFirst] = useState(initialStateFirstStep);
  const [{ name, cpf, phone, nationality }, setStateSecond] = useState(initialStateSecondStep);

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

  
  const onsubmitHandler = async data => {
    console.log(data)
    const user = {
      login: 'teste@teste',
      password: '1234456'
    };

    console.log(user);
    const headers = {
      "Content-Type":  "application/json",
      "Accept-Language": "pt-br"
    }

    const res = await axios.post(`https://virtserver.swaggerhub.com/garusocruz/test/1.0.0/api/legacy/register/sign_up`, { user }, { headers })

    if(res.status === 200) {
      handleClickOpen();
    }
    else {
      handleClickOpen();
    }
  }

  const nationalitiesOptions = [
    { value: 'BRA', label: 'Brasileiro' },
    { value: 'CHI', label: 'Chileno' },
    { value: 'AR', label: 'Argentino' },
    { value: 'O', label: 'Outros' }
  ]

  const renderAuthButton = ()=>{
    if(step === 1){ 
      return (
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
      )
    }
    else {
      return (
        <CustomCard title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'}>
            <From onSubmit={onsubmitHandler}>
                <Input name="name" type="text" placeholder="Nome completo"/>
                <Input name="cpf" type="text" placeholder="CPF"/>
                <CustomSelect name="nationality" options={nationalitiesOptions} placeholder="Nacionalidade" />
                <DatePicker name="birthday" placeholder="Data de Nascimento" />
                <Input name="phone" type="text" placeholder="Celular"/>
                <Button type={'submit'} disabled={false}>Continuar</Button>
            </From>
        </ CustomCard>
      )
    }
  }

  return (
    <Layout>
          {renderAuthButton()}
          <CustomDialog 
            open={open}
            messagem={"Parabéns, você foi cadastrado com sucesso!"}
            handleClose={handleClose}
          />
    </Layout>
  );
}

export default Signup;
