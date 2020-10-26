import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../../components/layout';
import CustomCard from '../../components/customcard';
import Button from '../../components/button';
import AdyenCheckout from '@adyen/adyen-web';
import CreditCardFlags from '../../components/creditcardflags';
import Adyen from '../../components/adyen';

const PaymentMethod: React.FC<any> = () => {
    const paymentContainer = useRef(null);
    const [paymentData, setPaymentData] = useState({
        isValid: false,
        component: undefined,
        data: undefined
    });

    
    const handleSubmit = useCallback(() => {
        console.log(paymentData);
    }, [paymentData]);

    useEffect(() => {
    
            const checkout = new AdyenCheckout({
            
                clientKey: 'pub.v2.8015602621862531.aHR0cDovL2xvY2FsaG9zdDozMDAw.h6KHmrx29MqaJMctsljiG5W_9LtP22etNyu62OUUtdA',
                onChange:(state, component) => {
                    setPaymentData({
                        isValid: state.isValid,
                        component: component,
                        data: state.data
                    })
                },
                paymentMethodsResponse: {
                paymentMethods:[
                    {
                    "details": [
                        {
                        "key": "number",
                        "type": "text"
                        },
                        {
                        "key": "expiryMonth",
                        "type": "text"
                        },
                        {
                        "key": "expiryYear",
                        "type": "text"
                        },
                        {
                        "key": "cvc",
                        "type": "text"
                        },
                        {
                        "key": "holderName",
                        "optional": true,
                        "type": "text"
                        }
                    ],
                    "name": "Credit Card",
                    "type": "scheme"
                    }
                ]
                },
                locale: 'pt-BR',
                environment: 'test',
                showPayButton: false,
                hasHolderName: true,
                holderNameRequired: true,
                //onError: handleError
            });

            checkout.create('card').mount(paymentContainer.current);
        
    }, []);

    return (
        <>
            <Layout>
                <CustomCard title="Método de pagamento" subheader="Cadastre seu cartão de crédito para finalizar a compra do seu plano">
                <CreditCardFlags />
                <Adyen componentRef={paymentContainer}/>
                <Button type={'button'} disabled={false} handleClick={handleSubmit}>Continuar</Button>
                </CustomCard>
            </Layout>
        </>
    );
}

export default PaymentMethod;