import React from 'react';
import Card from '../../components/card/card.component';
import Input from '../../components/inputPassword/input.component';
import { FormControl, FormGroup, TextField } from '@material-ui/core';
import { useRouter } from 'next/router'
import CustomCard from '../../components/customcard';

const Signup: React.FC<any> = () =>  {
    const router = useRouter() ;

    const onsubmitHandler = event => {
        event.preventDefault();
        console.log('submeeeet');
        router.push("/personal-information")
    }
    return (
        <>
            <CustomCard  title={'Cadastro'} subheader={'Bem vindo ao Bike Itaú! Para continuar, digite seu e-mail e crie uma senha.'} >
                <FormControl>
                    <TextField placeholder='E-mail' variant="outlined" label='E-mail'></TextField><br/>
                    {/* <Input placeholder="Crie uma senha" ></Input> */}
                    <button type="submit" onClick={onsubmitHandler}>
                    Submit
                    </button>
                </FormControl>
            </CustomCard>
        </>
    );
}

export default Signup;