import Layout from '../../components/layout'
import React from 'react'
import CustomCard from '../../components/customcard'
import { CustomForm } from './styles';
import Input from '../../components/input';
import Button from '../../components/formbutton';

export default function PersonalInformation() {
    
    function handleSubmit(data) {
        console.log(data);
        // { email: 'test@example.com', password: '123456' }
    }
      
  return (
    <Layout>
        <CustomCard title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'} >
            <CustomForm onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome completo" />
                <Input name="cpf" type="text" placeholder="CPF"/>

                <Input name="phone" type="text" placeholder="Crie uma senha"/>
                <Button type={'submit'} disabled={true}>Continuar</Button>
            </CustomForm>
        </ CustomCard>
    </Layout>
  )
}