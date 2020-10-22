import React, { useCallback, useMemo, useRef, useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import { useRouter } from 'next/router'
import PasswordRequirements from '../../components/passwordrequirements';
import * as Yup from 'yup';
import { Form } from '@unform/web';	
import { post } from '../../services/axios.service';
import { VALIDATE_EMAIL } from '../../constants/api.constants';
import CustomDialog from '../../components/dialog';
import { IValidateEmail } from '../../interfaces/signup.interface';

const Signup: React.FC<any> = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const [dialogData, setOpen] = useState({open: false, message: ''});
  const [loading, setLoading] = useState(false);

  const handleClickOpen = (message: string, success: boolean) => {
    setOpen({open: true, message: message});
  };

  const handleClose = () => {
    setOpen({open: false, message: ''});
  };

  const handleSubmit = useCallback(async data => {
    try {
      setLoading(true);
     formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup
          .string()
          .email('O e-mail digitado é inválido. Tente novamente')
          .required('O e-mail é obrigatório'),
        password: Yup
          .string()
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/, 'A senha precisa seguir os requisitos listados abaixo')
          .min(8, 'A senha precisa ter no minimo 8 caracteres')
          .required("A senha é obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const postObj: IValidateEmail = {
        email: data.email,
        password: data.password 
      }

      try {
        await post<any>(VALIDATE_EMAIL, { ...postObj });
        router.push({
          pathname: '/additional-information',
          query: { ...postObj }
        });
        setLoading(false);
      }
      catch (error) {
          handleClickOpen(error.message, false);
          setLoading(false);
      }
 
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      setLoading(false);
    }
  }, [])

  const initialState = {
    eight: false,
    lower: false,
    upper: false,
    number: false,
    symbol: false
  }

  const [state, setState] = useState({ ...initialState });

  const checkPassword = useCallback( (data) => {
    const pass = data.target.value;

    setState({
      eight: pass.length >= 8 ? true : false,
      lower: /[a-z]/.test(pass) ? true : false,
      upper: /[A-Z]/.test(pass) ? true : false,
      number: /[0-9]/.test(pass) ? true : false,
      symbol: /[!@#$%^&*]/.test(pass) ? true : false
    });

  }, [])

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
          <Button type={'submit'} disabled={loading}>Continuar</Button>
        </Form>
      </CustomCard>
      <CustomDialog 
        open={dialogData.open}
        messagem={dialogData.message}
        handleClose={handleClose}
      />
    </Layout>
  );
}

export default Signup;
