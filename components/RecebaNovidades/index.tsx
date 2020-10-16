import { Grid } from '@material-ui/core';
import React from 'react';
import From from '../form';
import Button from '../formbutton';
import Input from '../input';
import { RecebaNovidadesRow } from './styles';

const RecebaNovidades: React.FC<any> = () => {

    const handleSubmit = data => {
        console.log(data);
      }

    return (
        <>
            <RecebaNovidadesRow container alignItems="flex-end">
                
                <Grid item xs={12} sm={12} lg={6} xl={4}>
                    Receba nossas novidades
                </Grid>
                <Grid item xs={12} sm={12} lg={6} xl={4}>
                    <From onSubmit={handleSubmit}>
                        <Input name="email" type="email" placeholder="E-mail de acesso" />
                        <Button type={'submit'} disabled={false}>Cadastre-se</Button>
                    </From>
                </Grid>

            </RecebaNovidadesRow>
        </>
    );
}

export default RecebaNovidades;