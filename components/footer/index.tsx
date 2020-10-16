import { Grid } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import RecebaNovidades from '../RecebaNovidades';
import { FooterRow, MenuBaixar, MenuRow, Image, MenuItens } from './styles';

const Footer: React.FC<any> = () => {
    const menuOptions = {
        firstRow: [
            {
                name: 'Página Inicial',
                link: '/',
                key: '1'

            },
            {
                name: 'Termos de Uso',
                link: '/',
                key: '2'

            },
            {
                name: 'Politica de Privacidade',
                link: '/',
                key: '3'

            },
        ],
        secondRow: [
            {
                name: 'Fale com a gente',
                link: '/',
                key: '4'

            },
            {
                name: 'Regras Gerais',
                link: '/',
                key: '5'

            },
            {
                name: 'Passo a Passo',
                link: '/',
                key: '6'

            },
        ]
    }
    return (
        <>
            <FooterRow>
                <RecebaNovidades/>
                <MenuRow container justify="flex-start">
                    <Grid item xs={12} sm={6} lg={3} xl={2}>
                        <a><Image src='/images/logo_footer.svg'></Image></a>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} xl={2}>
                        {menuOptions.firstRow.map(({ name, link, key }) => (
                            <Link href={link} key={key}><MenuItens>{name}</MenuItens></Link>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} xl={2}>
                        {menuOptions.secondRow.map(({ name, link, key }) => (
                        <Link href={link} key={key}><MenuItens>{name}</MenuItens></Link>
                        ))}
                    </Grid>
                </MenuRow>
                <MenuBaixar>
                    hehehe
                </MenuBaixar>
            </FooterRow>
        </>
    );
}

export default Footer;