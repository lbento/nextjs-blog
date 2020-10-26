import React, { useRef, useState, useEffect, useCallback } from 'react';
import Layout from '../../components/layout';
import CustomCard from '../../components/customcard';
import CustomSelect from '../../components/select/index';
import { Form } from '@unform/web';
import { IPlans } from '../../interfaces/plans.interface';
import { tryGetPreviewData } from 'next/dist/next-server/server/api-utils';
import * as Yup from 'yup';
import { SentimentVerySatisfiedOutlined } from '@material-ui/icons';
import CustomPlanCard from '../../components/plancard/index';
import Button from '../../components/formbutton';
import Grid from '@material-ui/core/Grid';
import Input from '../../components/input';


const Plans: React.FC<any> = () => {
    const formRef = useRef(null);
    const [dialogData, setOpen] = useState({ open: false, message: '', success: false });
    const [visible, setVisible] = useState(true);

    const regionList = [
        { value: '1', label: 'São Paulo, SP' },
        { value: '2', label: 'Rio de Janeiro, RJ' },
        { value: '3', label: 'Porto Alegre, RS' },
        { value: '4', label: 'Salvador, BA' },
        { value: '5', label: 'Buenos Aires, ARG' },
        { value: '6', label: 'Santiago, CHL' }
    ]

    const handleClickOpen = (message: string, success: boolean) => {
        setOpen({ open: true, message: message, success: success });
    };

    const onsubmitHandler = async data => {
        try {
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                city: Yup
                    .string()
                    .required(),
                idPlan: Yup
                    .string()
                    .required(),
                cupom: Yup
                    .string()
            });

            await schema.validate(data, {
                abortEarly: false
            });

            const planData: IPlans = {
                city: data.city,
                idPlan: 'teste',
                cupom: data.cupom
            }

            try {
                //const res = await post<>
                handleClickOpen("indo até pagamento", true);

            } catch (error) {
                handleClickOpen(error.message, false);

            }
        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
    }
    



    return (
        <>
            <Layout>
                <CustomCard title="Onde você vai pedalar?" subheader="Selecione abaixo a cidade para qual você deseja comprar um plano:">
                    <Form onSubmit={onsubmitHandler} ref={formRef}>
                        <CustomSelect name="city" options={regionList} placeholder="Localização" ></CustomSelect>
                    </Form>
                </CustomCard>
                <div style={{ marginTop: '30px' }}>

                    <CustomCard title="Escolha um Plano" subheader="Escolha o plano perfeito para você começar a pedalar" >
                        <Grid container direction="column" alignItems="center" justify="center" style={{ display: "flex", flexDirection: "row" }} spacing={2}>
                            <CustomPlanCard title="Passe Diário" value="R$ 8,80" descount=" " message=" ">
                                <Button type="button">Continuar</Button>
                            </CustomPlanCard>
                            <CustomPlanCard title="Assinatura Mensal" value="R$ 20,20" descount="R$ 29,90" message="PREÇO ESPECIAL">
                                <Button type="button">Continuar</Button>
                            </CustomPlanCard>
                            <CustomPlanCard title="Assinatura Anual" value="R$ 160,00" descount="R$ 239,90" message="PREÇO ESPECIAL">
                                <Button type="button">Continuar</Button>
                            </CustomPlanCard>
                        </Grid>
                        <Grid container direction="column" alignItems="center" style={{ display: "flex", flexDirection: "row" }}>
                            <Grid item xs={12} sm={12} lg={6} xl={6}>
                                <p style={{ fontSize: "14px", fontWeight: 600, color: "#535161" }}>Insira abaixo seu código promocional:</p>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6} xl={6}>
                                <input name="cupom" placeholder="Código promocional" />
                            </Grid>

                        </Grid>
                        <Button type="button">Ir para pagamento</Button>
                    </CustomCard>
                </div>
            </Layout>
        </>
    );
}

export default Plans;