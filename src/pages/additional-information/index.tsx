import React, { useRef, useState } from 'react';
import CustomCard from '../../components/customcard';
import Input from '../../components/input';
import Button from '../../components/formbutton';
import Layout from '../../components/layout';
import { Form } from '@unform/web';	
import CustomSelect from '../../components/select';
import CustomDialog from '../../components/dialog';
import DatePicker from '../../components/datepicker';
import { post } from '../../services/axios.service';
import { useRouter } from 'next/router'
import CustomCheckbox from '../../components/checkbox';
import { SIGNUP } from '../../constants/api.constants';
import { USER_ACCESS } from '../../constants/storage.constants';
import { ISignup } from '../../interfaces/signup.interface';
import { IUserAccess } from '../../interfaces/user-access.interface';
import * as Yup from 'yup';
import { getPostData } from '../../services/termos';
import CustomConfirmDialog from '../../components/confirmdialog';

const AdditionalInformation: React.FC<any> = ({postData}) => {
  const router = useRouter();
  const formRef = useRef(null);

  const [dialogData, setOpen] = useState({open: false, message: '', success: false});
  const [confirmDialogData, setConfirmOpen] = useState({open: false, success: false});
  const [termsChecked, setTermsChecked] = useState(false);

  const handleClickOpen = (message: string, success: boolean) => {
    setOpen({open: true, message: message, success: success});
  };

  const handleClickConfirmOpen = (success: boolean, e: any) => {
    e.preventDefault();
    setConfirmOpen({open: true, success: success});
  };

  const handleClose = () => {
    if(dialogData.success) {
        router.push('/');
    }

    setOpen({open: false, message: '', success: false});
  };

  const handleCofirmClose = (agreed) => {
      if(agreed && !termsChecked) {
        setTermsChecked(true);
      }

    setConfirmOpen({open: false, success: false});
  };
 
  const onsubmitHandler = async data => {
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          name: Yup
            .string()
            .required('O nome é obrigatório'),
          cpf: Yup
            .string()
            .min(13, 'CPF incompleto')
            .required('O CPF é obrigatório'),
          phone: Yup
            .string()
            .min(15, 'Número de telefone incompleto')
            .required('O celular é obrigatório'),
          nationality : Yup
            .string()
            .required('A nacionalidade é obrigatória'),
          gender : Yup
            .string()
            .required('O gênero é obrigatório'),
           birthday : Yup
           .string()
           .required('A data de nascimento é obrigatória'),
           termsConditions: Yup
            .boolean()
            .oneOf([true], 'Você deve aceitar os termos de uso e política de privacidade'),
        });
  
        await schema.validate(data, {
          abortEarly: false,
        });
  
      const userData: ISignup = {
          email: router.query.email,
          password: router.query.password,
          name: data.name,
          birthday: data.birthday,
          nationality: data.nationality,
          phone: data.phone,
          gender: data.gender,
          identity: {
            type: 2,
            number: data.cpf
          }
        };
  
        try {
            const res = await post<IUserAccess>(SIGNUP, { ...userData });
            handleClickOpen("Parabéns, você foi cadastrado com sucesso!", true);
            localStorage.setItem(USER_ACCESS, JSON.stringify(res))
        }
        catch (error) {
            handleClickOpen(error.message, false);
        }
      }
      catch (err) {
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
  }

  const nationalitiesOptions = [
    { value: 'BRA', label: 'Brasileiro' },
    { value: 'CHI', label: 'Chileno' },
    { value: 'AR', label: 'Argentino' },
    { value: 'O', label: 'Outros' }
  ];

  const gendersOptions = [
    { value: '1', label: 'Masculino' },
    { value: '2', label: 'Feminino' },
    { value: '0', label: 'Outro' },
  ]

  const handlecheckboxChange = (agreed) => {
    setTermsChecked(agreed);
  }

  return (
    <Layout>
            <CustomCard title={'Informações adicionais'} subheader={'Preencha as informações abaixo para se cadastrar'}>
                <Form onSubmit={onsubmitHandler} ref={formRef}>
                    <Input name="name" type="text" placeholder="Nome completo"/>
                    <Input name="cpf" type="text" mask="999.999.999-99" placeholder="CPF"/>
                    <CustomSelect name="nationality" options={nationalitiesOptions} placeholder="Nacionalidade" />
                    <CustomSelect name="gender" options={gendersOptions} placeholder="Gênero" />
                    <DatePicker name="birthday" placeholder="Data de Nascimento" />
                    <Input name="phone" type="text" mask="(99) 9 9999-9999" placeholder="Celular"/>
                    <CustomCheckbox changing={ (e) => handlecheckboxChange(e)} isChecked={termsChecked} name="termsConditions">Eu aceito os <span style={{color: '#EC7000', textDecoration: 'underline'}} onClick={(e) => handleClickConfirmOpen(true, e)}>Termos de Uso</span> e a <span style={{color: '#EC7000', textDecoration: 'underline'}}>Política de Provacidade</span></CustomCheckbox>
                    <Button type={'submit'} disabled={false}>Continuar</Button>
                </Form>
            </ CustomCard>
          <CustomDialog 
            open={dialogData.open}
            messagem={dialogData.message}
            handleClose={handleClose}
          />
        <CustomConfirmDialog 
            open={confirmDialogData.open}
            messagem={<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
            buttonText={'Concordo com os Termos de Uso'}
            handleClose={handleCofirmClose}
          />
    </Layout>
  );
}

export default AdditionalInformation;
  
export async function getStaticProps() {

    const postData = await getPostData('termos-de-uso')
    return {
        props: {
            postData
        }
    }
}
