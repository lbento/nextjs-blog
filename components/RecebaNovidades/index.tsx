import { Grid } from '@material-ui/core';
import React from 'react';
import { RecebaNovidadesRow, CustomButton, CustomTextField, CustomForm } from './styles';

const RecebaNovidades: React.FC<any> = () => {

    const handleSubmit = data => {
        console.log(data);
      }

    return (
        <>
            <RecebaNovidadesRow container alignItems="flex-end">
                
                <Grid item xs={12} sm={5} lg={6} xl={4}>
                    Receba nossas novidades
                </Grid>
                <Grid item xs={12} sm={7} lg={6} xl={4}>
                    <CustomForm onSubmit={handleSubmit}>
                        <CustomTextField variant="outlined" name="email" type="email" placeholder="E-mail de acesso" />
                        <CustomButton variant="contained" background={"#ff5900"} type={'submit'} disabled={false}>Cadastre-se</CustomButton>
                    </CustomForm>
                </Grid>

            </RecebaNovidadesRow>
        </>
    );
}

export default RecebaNovidades;