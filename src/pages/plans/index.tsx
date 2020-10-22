import React, { useRef, useState } from 'react';
import Layout from '../../components/layout';
import CustomCard from '../../components/customcard';
import CustomSelect from '../../components/select/index';
import { Form } from '@unform/web';
import { IPlans } from '../../interfaces/plans.interface';
import { tryGetPreviewData } from 'next/dist/next-server/server/api-utils';
import * as Yup from 'yup';

const Plans: React.FC<any> = () => {
    const formRef = useRef(null);
    const [dialogData, setOpen] = useState({ open: false, message: '', success: false });

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
                cupom: 'teste'
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
                        <CustomSelect name="city" options={regionList} placeholder="Localização"></CustomSelect>
                    </Form>
                </CustomCard>
            </Layout>
        </>
    );
}

export default Plans;