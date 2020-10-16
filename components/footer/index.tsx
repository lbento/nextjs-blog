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
                link: '/'

            },
            {
                name: 'Termos de Uso',
                link: '/'

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
                        <a><Image src='/images/logo_footer.svg'></Image></a>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} xl={2}>
                        {menuOptions.firstRow.map(({ name, link }) => (
                            <Link href={link}><MenuItens>{name}</MenuItens></Link>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} xl={2}>
                        {menuOptions.secondRow.map(({ name, link }) => (
                            <Link href={link}><MenuItens>{name}</MenuItens></Link>
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