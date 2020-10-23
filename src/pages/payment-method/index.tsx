import React, { createRef, useEffect, useRef } from 'react';
import Layout from '../../components/layout';
import CustomCard from '../../components/customcard';
import Button from '../../components/formbutton';
import AdyenCheckout from '@adyen/adyen-web';
import CreditCardFlags from '../../components/creditcardflags';

const PaymentMethod: React.FC<any> = () => {
    const paymentContainer = useRef(null);

    useEffect(() => {
    
            const checkout = new AdyenCheckout({
            
                clientKey: 'pub.v2.8015602621862531.aHR0cDovL2xvY2FsaG9zdDozMDAw.h6KHmrx29MqaJMctsljiG5W_9LtP22etNyu62OUUtdA',
                // onChange:(state, component) => {
                //   this.onChangesHandler.emit({ state, component })
                // },
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
                //onError: this.handleError
            });

            checkout.create('card').mount(paymentContainer.current);
        
    }, []);

    return (
        <>
            <Layout>
                <CustomCard title="Método de pagamento" subheader="Cadastre seu cartão de crédito para finalizar a compra do seu plano">
                <CreditCardFlags />
                <div ref={paymentContainer}></div>
                <Button type={'submit'} disabled={false}>Continuar</Button>
                </CustomCard>
            </Layout>
        </>
    );
}

export default PaymentMethod;