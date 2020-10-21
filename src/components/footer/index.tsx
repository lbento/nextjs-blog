import { Grid } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import RecebaNovidades from '../RecebaNovidades';
import { FooterRow, MenuBaixar, MenuRow, Image, MenuItens, ContainerLojas, Title } from './styles';

const Footer: React.FC<any> = () => {
    const menuOptions = {
        firstRow: [
            {
                name: 'Página Inicial',
                link: '/'

            },
            {
                name: 'Termos de Uso',
                link: '/texto/termos-de-uso'

            },
            {
                name: 'Politica de Privacidade',
                link: '/'

            },
        ],
        secondRow: [
            {
                name: 'Fale com a gente',
                link: '/'

            },
            {
                name: 'Regras Gerais',
                link: '/'

            },
            {
                name: 'Passo a Passo',
                link: '/'

            },
        ]
    }
    return (
        <>
            <FooterRow>
                <RecebaNovidades/>
                <MenuRow container justify="flex-start">
                    <Grid item xs={12} sm={6} lg={3} xl={2}>
                        <a><Image src='/images/logo_footer.png' height={'62'} width={'218'} /></a>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} xl={2}>
                        {menuOptions.firstRow.map(({ name, link }, index) => (
                            <Link href={link} key={index}><MenuItens>{name}</MenuItens></Link>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} xl={2}>
                        {menuOptions.secondRow.map(({ name, link }, index) => (
                        <Link href={link} key={index}><MenuItens>{name}</MenuItens></Link>
                        ))}
                    </Grid>
                </MenuRow>
                <MenuBaixar container justify="space-between">
                    <Grid item xs={12} sm={6} lg={3} xl={3}>
                        <Title>Baixe o App Bike Itaú</Title>
                        <ContainerLojas>
                            <a><Image src='/images/icone.png' height={'48'} width={'48'} /></a>
                            <a><Image src='/images/apple_store.jpg' height={'29'} width={'83'} /></a>
                            <a><Image src='/images/google_play.jpg' height={'29'} width={'83'} /></a>
                        </ContainerLojas>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={2} xl={2}>
                        <Title>Operador</Title>
                        <a><Image src='/images/logo_tembici.png' height={'51'} width={'200'} /></a>
                    </Grid>
                </MenuBaixar>
            </FooterRow>
        </>
    );
}

export default Footer;