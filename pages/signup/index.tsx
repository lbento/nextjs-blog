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

const Signup: React.FC<any> = () =>  {
  const router = useRouter();
    const initialStateFirstStep = {
        email: "",
        password: ""
      };

      const initialStateSecondStep = {
        name: "",
        cpf: "",
        phone: "",
        nationality: "",
        birthday: ""
      }

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      router.push('/');
    };

    const [step, changeStep] = useState(1);

    const handleSubmit = data => {
        console.log(data);
        changeStep(2);
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

    const colourOptions = [
      { value: 'BRA', label: 'Brasileiro' },
      { value: 'CHI', label: 'Chileno' },
      { value: 'AR', label: 'Argentino' },
      { value: 'O', label: 'Outros' }
    ]

    const renderAuthButton = ()=>{
        if(step === 1){
          
          return (
            <CustomCard  title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
                <From onSubmit={handleSubmit}>
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input name="password" type="password" placeholder="Crie uma senha"/>
                    <Button type={'submit'} disabled={false}>Continuar</Button>
                </From>
            </CustomCard>
          )
        } else {
          return (
            <CustomCard title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'}>
                <From onSubmit={onsubmitHandler}>
                    <Input name="name" type="text" placeholder="Nome completo"/>
                    <Input name="cpf" type="text" placeholder="CPF"/>
                    <CustomSelect name="nationality" options={colourOptions} placeholder="Nacionalidade" />
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
