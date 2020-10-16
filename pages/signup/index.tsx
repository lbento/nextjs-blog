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

  const checkPassword = data => {
    var pass = data.target.value;

    if (pass.length < 8) {
      console.log("Your password needs a minimum of eight characters")
    } else if (pass.search(/[a-z]/) < 0) {
      data.target.style = styles.sucess;
      console.log("Your password needs a lower case letter")
    } else if (pass.search(/[A-Z]/) < 0) {
      console.log("Your password needs an uppser case letter")
    } else if (pass.search(/[0-9]/) < 0) {
      console.log("Your password needs a number")
    } else if (pass.search(/[!@#$%^&*]/) < 0) {
      console.log("Your password needs a symbol")
    } else {
      console.log('tudo pronto!')
    }

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
                <span style={styles.info}>Letra maiúscula</span>
                <span style={styles.info}>Letra minúscula</span>
                <span style={styles.info}>Valor numérico</span>
                <span style={styles.info}>Um caractere especial dentre @ # $ & % ^ + =</span>
                <span style={styles.info}>Ao menos 8 digitos</span>
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
                <Input name="phone" type="number" placeholder="Celular"/>
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
