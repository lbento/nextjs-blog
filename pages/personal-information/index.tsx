import Layout from '../../components/layout'
import React from 'react'
import CustomCard from '../../components/customcard'
import { Form } from '@unform/web';
import Input from '../../components/input';

export default function PersonalInformation() {
    function handleSubmit(data) {
        console.log(data);
        // { email: 'test@example.com', password: '123456' }
      }
      
  return (
    <Layout>
        <CustomCard  title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'} >
        <Form onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Crie uma senha"/>
            <button type="submit">Sign in</button>
        </Form>
        </ CustomCard>
    </Layout>
  )
}