import React from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import From from '../../components/form';
import CustomSelect from '../../components/select';
import CustomDialog from '../../components/dialog';
import DatePicker from '../../components/datepicker';
import axios from 'axios';
import { useRouter } from 'next/router'

const AdditionalInformation: React.FC<any> = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    router.push('/');
  };
 
  const onsubmitHandler = async data => {

    const userData = {
        email: router.query.email,
        password: router.query.password,
        name: data.name,
        birthday: data.birthday,
        nationality: data.nationality,
        phone: data.phone,
        identity: {
          type: 2,
          number: data.cpf
        }
      };

    const headers = {
      "Content-Type":  "application/json",
      "Accept-Language": "pt-br"
    }

    const res = await axios.post(`https://virtserver.swaggerhub.com/garusocruz/test/1.0.0/api/legacy/register/sign_up`, { userData }, { headers })

    if(res.status === 200) {
      handleClickOpen();
      localStorage.setItem('user_access', JSON.stringify(res.data[0])) 
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

  return (
    <Layout>
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
          <CustomDialog 
            open={open}
            messagem={"Parabéns, você foi cadastrado com sucesso!"}
            handleClose={handleClose}
          />
    </Layout>
  );
}

export default AdditionalInformation;
